import CartWidget from './CartWidget'
import './navBar.css'
import {Link, Outlet} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { useEffect, useState } from "react"

function NavBar() {

  const [categorias, setCategorias] = useState([])

  const { getCategories } = useContext(CartContext)

  useEffect(() => {
    getCategories().then(data => {
      setCategorias(data)
    }).catch(e => console.log(e))
  }, [getCategories])

    return (
      <>
      <nav className="navBar">
        <h1 className="titulo"> TATTOO SUPPLY </h1>
        <img className="logo" src="./public/maquina.png" alt="carrito de compras" />
        <ul className="lista">
            <li className="listaItem">
              <Link to={"/"}>Home</Link>
            </li>
             {categorias.map(categoria => (
                    <li key={categoria.filtro}  className="listaItem">
                        <Link to={`categorias/${categoria.filtro}`}>
                            {categoria.nombre}
                        </Link>
                    </li>
                ))}

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
  