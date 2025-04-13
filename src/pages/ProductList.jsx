import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import Loader from "../components/Loader"
import { Link } from 'react-router-dom'
/* import { toast } from "react-toastify"; */

export const Products = () => {
    const { products, addToCart, loading } = useContext(CartContext)
    const { theme } = useContext(ThemeContext)

    return(
        <div className={`${theme === "oscuro" ? "p-4 bg-[#2D2D2D]" : " p-4"}`}>
            <h1 className={`${theme === "oscuro" ? "text-3xl font-semibold text-center text-[#FAE5CF] mb-8" : "text-3xl font-semibold text-center text-[#5B0601] mb-8"}`}
            >
            Lista de Productos
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6">

                 {/* Card para Agregar Producto */}
                 <div className={`${theme === "oscuro" ? "flex flex-col bg-[#3E3E3E] items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-t-lg cursor-pointer hover:bg-[#4a4a4a]" : "flex flex-col bg-[#FAE5CF] items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-t-lg cursor-pointer hover:bg-[#f5d8b3]"}`}>
                    <Link to="/add-producto" className="flex flex-col items-center w-full h-full">
                        <div className="w-full h-80 bg-gray-300 dark:bg-gray-600 flex items-center justify-center rounded-lg mb-4">
                            <i className="bi bi-plus-circle text-6xl text-gray-700 dark:text-white"></i>
                        </div>
                        <h3 className={`${theme === "oscuro" ? "text-2xl font-semibold text-white text-center" : "text-2xl font-semibold text-[#5B0601] text-center"}`}>
                            AGREGAR PRODUCTO
                        </h3>
                    </Link>
                </div>


                { loading ? (
                   <div>
                        <p className={`${theme === "oscuro" ? "text-white" : "text-[#5B0601]"} text-xl font-semibold animate-pulse`}>
                                Cargando productos...
                        </p> 
                        <Loader />
                    </div>
                ) : (
                    products.map((product) => (
                        <div 
                            className={`${theme === "oscuro" ? "flex flex-col bg-[#3E3E3E] items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-t-lg" : "flex flex-col bg-[#FAE5CF] items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-t-lg" }`}
                            key={product.id}>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-80 object-cover rounded-lg mt-4 mb-2"
                            />
                            
                            <h3 className={`${theme === "oscuro" ?"text-2xl font-semibold text-white" : "text-2xl font-semibold text-[#5B0601]"}`}>{product.title} </h3>
                            <p className={`${theme === "oscuro" ? "text-xl font-bold text-white mb-2" : "text-xl font-bold text-[#5B0601] mb-2"}`}> ${product.price}</p>
                            <Link
                                to={`/producto/${product.id}`}
                                className="m-2 inline-block bg-cyan-800 text-white px-4 py-2 rounded hover:bg-cyan-600"
                                >
                                Ver detalle
                            </Link>
                            <button 
                                onClick={() => {addToCart(product)
                                /* alert(`✅ ${product.title} agregado al carrito`) */
                                }}
                                className={`${theme === "oscuro" ? "bg-[#5B0601]  text-white hover:bg-[#E0B394] hover:text-black px-4 py-2 rounded-lg transition-all" : "bg-[#5B0601] text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"}`}>
                                Agregar al carrito
                            <i className="m-1 bi bi-cart"></i>
                            </button>

                        </div>
                    ))
                )}
            </div>
        </div>
    )
}