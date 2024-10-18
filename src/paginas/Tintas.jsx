import productos from "../productos"
import ItemDetailContainer from "../components/itemDetailContainer"

function Tintas() {

  return (
    <div id="container">
      {
        productos.map(prod => prod.categoria === "tinta" && <ItemDetailContainer key ={prod.id} {...prod} />)
      }
    </div>
  )
}

export default Tintas