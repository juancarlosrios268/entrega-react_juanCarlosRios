import productos from "../productos";
import { useParams } from "react-router-dom";


function DetalleProducto(){
    const {id} = useParams();

    const productoTatuaje=productos.find(prod=>prod.id===parseInt(id))


    return(
        <div className="cardDetalle">
            <h2>Detalle del producto</h2>
            <img className="img" src={productoTatuaje.imagen} />
            <h2>{productoTatuaje.nombre}</h2>
            <p>{productoTatuaje.precio}</p>
            <h3>{productoTatuaje.descripcion}</h3>
           
        </div>
    )
}


    


export default DetalleProducto