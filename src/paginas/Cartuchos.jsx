import productos from "../productos"
import ItemDetailContainer from "../components/itemDetailContainer"

function Cartuchos() {

  return (
    <div id="container">
      {productos.map(prod =>{ 
        if( prod.categoria === "cartuchos") {
          return (
            <ItemDetailContainer key ={prod.id} {...prod} />
          )
        }
      })}
    </div>
  )
}

export default Cartuchos