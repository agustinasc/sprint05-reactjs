import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Nosotros from '../pages/Nosotros'
import { Products } from '../pages/ProductList'
import { ProductDetails } from '../pages/ProductDetails';
import {NotFound} from '../pages/NotFound';
import { AddProducts } from '../pages/AddProducts';


export const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/nosotros',
        element: <Nosotros />
    },
    {
        path: '/contacto',
        element: <Contact />
    },
    {
        path: '*',
        element: <NotFound />
    }, 
    {
        path: '/productos',
        element: <Products />
    },
    {
        path: '/producto/:id',
        element: <ProductDetails />
    },
    {
        path: '/add-productos',
        element: <AddProducts />
    }

]