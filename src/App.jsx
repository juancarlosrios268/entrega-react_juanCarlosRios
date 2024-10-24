
import NavBar from './components/NavBar'
import ItemListContainer from './paginas/ItemListContainer'
import CartWidget from './components/CartWidget'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetalleProducto from './components/DetalleProducto'
import Contacto from './components/Contacto'
import Maquinas from './paginas/Maquinas'
import Tintas from './paginas/Tintas'
import Cartuchos from './paginas/Cartuchos'
import "./assets/styles/card.css"

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
