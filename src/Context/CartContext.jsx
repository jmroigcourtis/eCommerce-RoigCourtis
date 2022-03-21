import {createContext, useContext, useState} from 'react'

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => { //Children para capturar toda la información de los nodos hijos
    const[cartList, setCartList] = useState([])

    const addToCart = (item) => {
        setCartList([...cartList, item]) //Utilizando spread operator
    }   

    const removeFromCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeFromCart
        }}>
            {children} 
        </CartContext.Provider>
    )
}


/*El prop CHILDREN adquiere las propiedades de todos los nodos hijos */