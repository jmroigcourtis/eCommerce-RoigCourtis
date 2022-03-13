import { useEffect} from "react"

const CheckOut = () => {
    useEffect(()=> {
        setTimeout(()=> {
            console.log('Carrito de compras')
        },3000)
    },[])

    return <h2>Futuro carrito de compras</h2>
}

export default CheckOut