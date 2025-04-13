import { useProducts } from "../context/CartContext"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const EditProduct = () => {
    const [title, setTitle] = useState([])
    const [price, setPrice] = useState([])
    const [image, setImage] = useState([])
    const [error, setError] = useState('')
   
    const navigate = useNavigate()
    const { products, updateProduct } = useProducts()
    const { id } = useParams()

    useEffect(() => {
        const productToEdit = products.find((product) => product.id === id)
        if(productToEdit) {
            setTitle(productToEdit.title)
            setPrice(productToEdit.price)
            setImage(productToEdit.image)
        } else {
            setError('Producto no encontrado')
        }
    }, [products, id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title.trim() === '' || image.trim() === '') {
            setError('Por favor, llenar los campos')
            return
        }
        try {
            await updateProduct(id, { title, price, image });
            navigate(`/producto/${id}`);
            
        } catch (error) {
            setError('Error al actualizar el producto')
            console.error('error ->', error);
            
        }
    }

  return (
    <div>
         <h2 className="text-xl font-bold">Editar Producto</h2>
        {/* error  */}
        {error && (
          <p className="text-red-400 mb-2">{error}</p>
        )}
           <button
            className="flex items-center gap-2  bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded transition duration-300"
            onClick={() => navigate('/productos')}
          >
            <i className="bi bi-arrow-left-circle-fill text-xl"></i>
            Volver Atras
          </button>

        <form 
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-4 space-y-4"
        >      
            <input 
                type="text"                 
                placeholder='Ingresar nombre del Producto'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />
            <input type="number" 
                name="price" 
                id="price" 
                placeholder='Ingresar precio'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />
            <input type="text" 
                name="image" 
                id="image" 
                placeholder='Ingresar la URL de la imagen'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full p-2 border rounded"
                required
            />
            <button 
                type="submit"
                className="w-full bg-[#5E272D] text-white py-2 rounded hover:bg-fuchsia-950 transition"
            >
                Editar Producto
            </button>
         
        </form>
    </div>
  )
}
