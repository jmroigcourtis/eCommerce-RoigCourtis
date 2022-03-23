import {createContext, useState, useEffect} from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



export const CartContext = createContext([])

export const CartContextProvider = ({children}) => { //Children para capturar toda la información de los nodos hijos
    const SwalAlert = withReactContent(Swal)
    const[cartList, setCartList] = useState([])

    useEffect(()=> {console.log(cartList)}, [cartList])
    
    
    const addToCart = (item) => {
        const checkForID = (id) => {
            return cartList.find((item) => item.id === id)
        }

        const addQuantity = (id) => {
            const itemQuantity = cartList.map(item => item.id === id ? {...item, cantidad: item.cantidad + 1} : item);
            return setCartList(itemQuantity)
        }

        const newItem = Object.assign(item, {cantidad: item.cantidad})
        checkForID(item.id) ? addQuantity(item.id, item.cantidad) : setCartList([...cartList, newItem])


    };   
    
    
    const clearCart = () => {
        setCartList([])
        SwalAlert.fire({
            icon: 'success',
            title: 'Carrito eliminado!'
        })
    }
    
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart
        }}>
            {children} 
        </CartContext.Provider>
    )
}


/*El prop CHILDREN adquiere las propiedades de todos los nodos hijos */