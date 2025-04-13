import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Nosotros from '../pages/Nosotros'
import { Products } from '../pages/ProductList'
import { ProductDetails } from '../pages/ProductDetails';
import { NotFound } from '../pages/NotFound';
import { AddProduct } from '../components/AddProduct';
import { EditProduct } from '../components/EditProduct';


export const routes = [
    {
        path: '/', element: <Home />
    },
    {
        path: '/nosotros', element: <Nosotros />
    },
    {
        path: '/contacto', element: <Contact />
    },
    {
        path: '/productos', element: <Products />
    },
    { /* RUTAS DINAMICAS */
        path: '/producto/:id', element: <ProductDetails />
    },
    {
        path: '/add-producto', element: <AddProduct />
    },
    {
        path: '/producto/:id/edit', element: <EditProduct />
    },
    { /* RUTA NO ENCONTRADA */
        path: '*', element: <NotFound />
    }, 
]