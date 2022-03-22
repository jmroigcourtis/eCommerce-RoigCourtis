import {createContext, useContext, useState} from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



export const CartContext = createContext([])

export const CartContextProvider = ({children}) => { //Children para capturar toda la información de los nodos hijos
    const SwalAlert = withReactContent(Swal)
    const[cartList, setCartList] = useState([])


    const addToCart = (item) => {
        setCartList([...cartList, item])
        // const CheckDuplicate =  cartList.findIndex((item) => (item.id))
        // if (CheckDuplicate) {
        //     console.log(item);
        
    }   
    
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