import { Link } from "react-router-dom";




function itemDetailContainer({nombre,precio,id,imagen}) {
  return (

    <Link to={`/ItemListContainer/${id}`} className="card">
    <img className="img" src={imagen}/>
    <h2 className="nombreProducto">{nombre}</h2>
    <h3 className="precioProducto">$: {precio}</h3>
    <button className="botonComprar">comprar</button>
    </Link>
    
  )
}

export default itemDetailContainer