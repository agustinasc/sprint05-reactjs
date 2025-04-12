import { useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";




export const ProductDetails = () => {
    const { id } = useParams()
    const { products, addToCart } = useContext(CartContext);
    const navigate = useNavigate()

    const product = products.find((item) => item.id === id);
  
    if (!product) {
      return <p className="text-center text-red-500 mt-10">Producto no encontrado</p>;
    }
  
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <button
            className="flex items-center gap-2  bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition duration-300"
            onClick={() => navigate(-1)}
            >
                <i className="bi bi-arrow-left-circle-fill text-xl"></i>
                Volver atras
            </button>
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">{product.title}</h2>
                <img src={product.image} alt={product.name} className="max-w-sm w-full h-auto mb-4 mx-auto rounded" />
                <p className="mb-2 text-gray-700">{product.description}</p>
                <p className="mb-4 font-semibold text-lg text-gray-800">Precio: ${product.price}</p>
                <button 
                className="bg-[#5E272D] hover:bg-green-700 text-white px-4 py-2 rounded"
                onClick={() => addToCart(product)}
                >
                Agregar al carrito
                </button>
            </div>
        </div>
    );
};
  

