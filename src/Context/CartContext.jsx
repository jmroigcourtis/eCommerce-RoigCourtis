import CartContextStyle from '../Context/CartContext.css'
import {createContext, useState, useEffect} from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



export const CartContext = createContext([])

export const CartContextProvider = ({children}) => { 
    const SwalAlert = withReactContent(Swal)
    const[cartList, setCartList] = useState([])

    useEffect(()=> {console.log(cartList)}, [cartList])

            const addToCart = (item) => {

                const checkForID = (id) => {
                    return cartList.find((item) => item.id === id)
                    }
                    
                    const addQuantity = () => {
                        const itemQuantity = cartList.map(item => item.id ? {...item, cantidad: item.cantidad += 1} : item);
                        return setCartList(itemQuantity)
                    }

                    
                    const newItem = Object.assign(item, {cantidad: item.cantidad})
                    checkForID(item.id) ? addQuantity(item.id, item.cantidad) : setCartList([...cartList, newItem])
                    
                };           
                
                const removeItem = (id) => {
                    const filterCart = cartList.filter(item => item.id !== id)     
                    setCartList(filterCart)
                }

                const checkQuantity = () => {
                    let totalQuantity = 0;
                    cartList.map(item => item.cantidad > 0 ? totalQuantity += item.cantidad : null)
                    console.log(totalQuantity)
                }

                const totalPrice = () => {
                    let totalPrice = 0
                    cartList.forEach(item => totalPrice += item.cantidad * item.price)
                    console.log(`Precio total: $ ${totalPrice}`);
                }

    checkQuantity();
    totalPrice();

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
            clearCart,
            removeItem                    }}>
            {children} 
        </CartContext.Provider>
    )
}


/*El prop CHILDREN adquiere las propiedades de todos los nodos hijos */