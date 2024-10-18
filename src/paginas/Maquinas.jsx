import productos from "../productos"
import ItemDetailContainer from "../components/itemDetailContainer"

function Maquinas() {

  return (
    <div id="container">
      {productos.map(prod =>{ 
        if( prod.categoria === "maquina") {
          return (
            <ItemDetailContainer key ={prod.id} {...prod} />
          )
        }
      })}
    </div>
  )
}

export default Maquinas