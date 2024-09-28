import CartWidget from './CartWidget'
import './navBar.css'
import {Link, Outlet} from "react-router-dom"

function NavBar() {
    return (
      <>
      <nav className="navBar">
        <h1 className="titulo"> TATTOO SUPPLY </h1>
        <img className="logo" src="./public/maquina.png" alt="carrito de compras" />
        <ul className="lista">
            <li className="listaItem">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="listaItem">
              <Link to={"ItemListContainer"}>Productos</Link>
             </li>
             <li className="listaItem">
              <Link to={"Contacto"}>Contacto</Link>
             </li>
        </ul>
        <CartWidget/>
      </nav>
        <Outlet/>
      </>
    )
  }
  
  export default  NavBar
  