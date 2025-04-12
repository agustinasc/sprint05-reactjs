import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProducts } from '../context/CartContext'

export const AddProducts = () => {
    const [ title, setTitle ] = useState([])
    const [ price, setPrice ] = useState([])
    const [ image, setImage ] = useState([])
    const [ error, setError ] = useState('')

    const navigate = useNavigate()
    const { createProduct } = useProducts()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title.trim() === '' || image.trim() === '') {
          setError('Por favor, llenar los campos')
          return
        }
        try {
            await createProduct({ title, image, price })
            navigate('/products')
          } catch (err) {
            setError('Error creando producto')
            console.log('err -> ', err)
          }
    }


  return (
    <div>
         <h2 className="text-xl font-bold">Agregar Nuevo Producto</h2>
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
                className="w-full bg-[#5E272D] text-white py-2 rounded hover:bg-green-700 transition"
            >
                Agregar Producto
            </button>
         
        </form>
    </div>
    
  )
}
