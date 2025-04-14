import { useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";


export const ProductDetails = () => {
    const { id } = useParams()
    const { products, addToCart, deleteProduct } = useContext(CartContext);
    const navigate = useNavigate()

    const product = products.find((item) => item.id === id);

    const handleDelete = async () => {
        //const confirmDelete = window.confirm("Estas seguro que quieres eliminar este producto?")
        const result = await Swal.fire({
                title: "Queres eliminar este producto??",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Eliminar",
                denyButtonText: `No Eliminar`
              })

        if (result.isConfirmed){    
            try {
                await deleteProduct(id)
                toast.success('Producto Eliminado!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                navigate('/productos')
            } catch (error) {
                toast.error('Error al eliminar el producto!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                console.error('error ->', error);              
            }
        }
    }
  
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
                <div>
                    <button 
                    className="bg-[#5E272D] hover:bg-green-700 text-white px-4 py-2 rounded m-2"
                    onClick={() => addToCart(product)}
                    >
                    Agregar al carrito
                    </button>
                    <button 
                    className="bg-indigo-800 hover:bg-indigo-500 text-white px-4 py-2 rounded m-2"
                    onClick={() => navigate(`/producto/${id}/edit`)}
                    >
                    Editar producto
                    </button>
                    <button 
                    className="bg-rose-800 hover:bg-rose-500 text-white px-4 py-2 rounded m-2"
                    onClick={handleDelete}
                    >
                    Eliminar producto
                    </button>
                </div>
            </div>
        </div>
    );
};
  

