import ItemDetailContainer from "../components/itemDetailContainer"

import { CartContext } from "../components/CartContext";
import { useContext } from "react";
import { useEffect, useState } from "react"

function Maquinas() {
    const [productsFir, setProductosFir] = useState([])
    const { getProducts } = useContext(CartContext)


  useEffect(() => {
    getProducts().then(data => {
      console.log(data)
      setProductosFir(data)
    }).catch(e => console.log(e))
  }, [getProducts])

  if(productsFir.length === 0) {
    return <div>loading</div>
  }

  return (
    <div id="container">
      {productsFir.map(prod =>{ 
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