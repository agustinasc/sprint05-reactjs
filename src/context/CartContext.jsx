import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import React from "react";

export const CartContext = createContext();

export const useProducts = () => useContext(CartContext)

const API = 'https://67f5c84e913986b16fa585f5.mockapi.io/products'

export const CartProvider = ({children}) => {

  const [products, setProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const [cart, setCart] = useState(() => {
    try {
      const storedCart  = localStorage.getItem("cart")  //trae lo que tenemos guardado y lo convierte en un arr
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error al parsear locaStorage:", error);
      return [];      
    }
  })
 
  /* CARGA API CON LOS PODUCTOS */
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                setLoading(true)
              const response = await axios.get(API);
              setProducts(response.data); 
            } catch (error) {
              console.error('Error al traer productos:', error);
            } finally {
                setLoading(false)
            }
          };
          fetchProductos();
          
      }, []);
    
      /* para guardar los cambios de carrito */
    useEffect(() => {
      try {
        if(cart.length > 0){
          localStorage.setItem("cart", JSON.stringify(cart.filter((item) => item !== null)))
          console.log("Carrito guardado en localStorage", cart);         
        }
      } catch (error) {
        console.error("Error al guardar el carrito:", error);       
      }
    }, [cart])

    const openCart = () => setIsCartOpen(true)
    const closeCart = () => setIsCartOpen(false)

    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.id === product.id);
          if (existingProduct) {
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }]
          }
        });
        toast.success("⭐ Producto agregado al carrito!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,  // Permite cerrar haciendo clic
            pauseOnHover: true,  // Pausa la animación al pasar el mouse
            draggable: true,  // Permite arrastrar la notificación
            theme: "dark",
          }); 
      };

    const removeFromCart = (productRemove) => {
        setCart((prevCart) => {
          return prevCart.map((product) => product.id === productRemove.id 
            ? {...product, quantity: product.quantity - 1} 
            : product).filter(product => product.quantity > 0)
        })
         toast.error("❌ Producto eliminado",{
                position: "top-center", 
                autoClose: 3000,  
                hideProgressBar: true,
                theme: "dark",  
              }) 
    } 


    /* elimina el producto del carrito */
    const removeProduct = (productID) => {
      setCart(cart.filter(product => product.id !== productID))
      localStorage.setItem("cart", JSON.stringify([]))

      toast.error("Producto eliminado del carrito", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,  // Permite cerrar haciendo clic
        pauseOnHover: true,  // Pausa la animación al pasar el mouse
        draggable: true,  // Permite arrastrar la notificación
        theme: "dark",
      }); 
    }

    const clearCart = () => {
      setCart([]); // Vacía el carrito
      localStorage.setItem("cart", JSON.stringify([]))

      toast.info("🗑️ Carrito vacio", { position: "top-center", autoClose: 2000, theme: "dark" })
  };

  /* AGREGAR PRODUCTO A LA LISTA DE PRODUCTOS: POST */
  const createProduct = async (product) => {
    const { data } = await axios.post(API, product)
    console.log('data ->', data);
    setProducts((prev) => [...prev, data])
  }


    return (
        <CartContext.Provider value={{ 
          cart, 
          products, 
          isCartOpen,
          openCart,
          closeCart,
          addToCart, 
          removeFromCart, 
          removeProduct,
          clearCart,
          loading, 
          setLoading,
          createProduct
          }}>
            {children}
        </CartContext.Provider>
    )
}