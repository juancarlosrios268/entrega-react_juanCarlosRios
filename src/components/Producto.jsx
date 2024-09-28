import { Link } from "react-router-dom";



function Producto({nombre,precio,id}) {
  return (
    <Link to={`/ItemListContainer/${id}`} className="card">
  
    <h2>{nombre}</h2>
    <h3>{precio}</h3>
    </Link>
  )
}

export default Producto