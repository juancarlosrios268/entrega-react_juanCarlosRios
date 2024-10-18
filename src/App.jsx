
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetalleProducto from './components/DetalleProducto'
import Home from './components/Home'
import Contacto from './components/Contacto'
import Maquinas from './paginas/Maquinas'
import Tintas from './paginas/Tintas'
import Cartuchos from './paginas/Cartuchos'



function App() {
  

  return (
    <>
     {/* <NavBar/> */}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<NavBar/>}>
                <Route index element={<ItemListContainer/>}/>
                <Route path="ItemListContainer/:id" element={<DetalleProducto/>}/>
                <Route path="Maquinas" element={<Maquinas/>}/>
                <Route path="Tintas" element={<Tintas/>}/>
                <Route path="Cartuchos" element={<Cartuchos/>}/>
                <Route path="Contacto" element={<Contacto/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
