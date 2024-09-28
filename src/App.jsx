
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetalleProducto from './components/DetalleProducto'
import Home from './components/Home'
import Contacto from './components/Contacto'



function App() {
  

  return (
    <>
     {/* <NavBar/> */}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<NavBar/>}>
                <Route index element={<Home/>}/>
                <Route path="ItemlistContainer" element={<ItemListContainer/>}/>
                <Route path="ItemListContainer/:id" element={<DetalleProducto/>}/>
                <Route path="Contacto" element={<Contacto/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
