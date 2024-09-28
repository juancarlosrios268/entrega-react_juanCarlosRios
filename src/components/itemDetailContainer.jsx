import { Link } from "react-router-dom";




function itemDetailContainer({nombre,precio,id,imagen}) {
  return (
    <Link to={`/ItemListContainer/${id}`} className="card">
    <img className="img" src={imagen}/>
    <h2>{nombre}</h2>
    <h3>$: {precio}</h3>
    <button>comprar</button>
    </Link>
    
  )
}

export default itemDetailContainer