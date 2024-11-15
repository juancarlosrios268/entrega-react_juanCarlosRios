
import NavBar from './components/NavBar'
import ItemListContainer from './paginas/ItemListContainer'
import CartWidget from './components/CartWidget'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetalleProducto from './components/DetalleProducto'
import Contacto from './components/Contacto'
import "./assets/styles/card.css"
import { CartProvider } from './components/CartContext'


function App() {
  return (
    <>
     {/* <NavBar/> */}
      <CartProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<NavBar/>}>
                    <Route index element={<ItemListContainer/>}/>
                    <Route path="ItemListContainer/:id" element={<DetalleProducto/>}/>
                    <Route path="Contacto" element={<Contacto/>}/>
                    <Route path="categorias/:name" element={<ItemListContainer/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </CartProvider>
    
    </>
  )
}

export default App
