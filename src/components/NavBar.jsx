import CartWidget from './CartWidget'
import './navBar.css'

function NavBar() {
  

    return (
      <nav className="navBar">
        <h1 className="titulo"> TATTOO SUPPLY </h1>
        <img className="logo" src="./public/maquina.png" alt="carrito de compras" />
        <ul className="lista">
            <li className="listaItem"><a href="#home" target="_blank">Inicio</a></li>
            <li className="listaItem"><a href="#about" target="_blank">Sobre Nosotros</a></li>
            <li className="listaItem"><a href="#services" target="_blank">Servicios</a></li>
            <li className="listaItem"><a href="#contact" target="_blank">Contacto</a></li>
        </ul>
        <CartWidget/>
      </nav>
    )
  }
  
  export default  NavBar
  