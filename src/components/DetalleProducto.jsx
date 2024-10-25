import productos from "../productos";
import { useParams } from "react-router-dom";



function DetalleProducto(){
    const {id} = useParams();

    const productoTatuaje=productos.find(prod=>prod.id===parseInt(id))
    let imgPath = 'https://raw.githubusercontent.com/juancarlosrios268/entrega-react_juanCarlosRios/refs/heads/main/public/' + productoTatuaje.imagen


    return(
        <div className="cardDetalle">
            <h2>Detalle del producto</h2>
            <img className="img" src={imgPath} />
            <h2>{productoTatuaje.nombre}</h2>
            <p>{productoTatuaje.precio}</p>
            <h3>{productoTatuaje.descripcion}</h3>
            <button onClick={()=>addToCart} className="botonComprar">+</button>
            <button className="botonComprar">-</button>
           
        </div>
    )
}


    


export default DetalleProducto