import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => {
        useContext(CartContext)
}

export const CartContextProvider  = ({children}) => {
    const [cartList, setCartList] = useState([]) /*Estado global por Context */

    const addToCart = (item) => {
        setCartList([...cartList, item])
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