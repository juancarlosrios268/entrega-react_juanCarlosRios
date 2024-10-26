import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { useEffect, useState } from "react"


function DetalleProducto(){
//   const [productsFir, setProductosFir] = useState([])
  const [productoTatuaje, setProductoTatuaje] = useState(null)
  const [imgPath, setImgPath] = useState('')

  const { getProducts } = useContext(CartContext)
  const {addToCart} = useContext(CartContext)
  const {id} = useParams();
  
  useEffect(() => {
    getProducts().then(data => {
      console.log(data)
    //   setProductosFir(data)
      
    setProductoTatuaje(data.find(prod=>prod.id===parseInt(id)))
    console.log(productoTatuaje)
    }).catch(e => console.log(e))
  }, [getProducts])

  useEffect(() => {
    if(productoTatuaje !== null) {
        setImgPath('https://raw.githubusercontent.com/juancarlosrios268/entrega-react_juanCarlosRios/refs/heads/main/public/' + productoTatuaje.imagen)
    }
  }, [productoTatuaje])

    if(productoTatuaje === null) {
        return <div>loading</div>
    }

    return(
        <div className="cardDetalle">
            <h2>Detalle del producto</h2>
            <img className="img" src={imgPath} />
            <h2>{productoTatuaje.nombre}</h2>
            <p>{productoTatuaje.precio}</p>
            <h3>{productoTatuaje.descripcion}</h3>
            <button onClick={() => addToCart(productoTatuaje)} className="botonComprar">+</button>
            <button className="botonComprar">-</button>
        </div>
    )
}


    


export default DetalleProducto