import productos from "../productos";
import { useParams } from "react-router-dom";


function DetalleProducto(){
    const {id} = useParams();

    const productoTatuaje=productos.find(prod=>prod.id===parseInt(id))


    return(
        <div>
            <h2>Detalle del producto</h2>
            <h2>{productoTatuaje.nombre}</h2>
            <p>{productoTatuaje.precio}</p>
            <h3>{productoTatuaje.descripcion}</h3>
        </div>
    )
}


    


export default DetalleProducto