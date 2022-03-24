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
                    
                    const addQuantity = (id) => {
                        const itemQuantity = cartList.map(item => item.id === id ? {...item, cantidad: item.cantidad} : item);
                        return setCartList(itemQuantity)
                    }
                
                    const newItem = Object.assign(item, {cantidad: item.cantidad})
                    checkForID(item.id) ? addQuantity(item.id, item.cantidad) : setCartList([...cartList, newItem])
    
                    
                    
                };       
                
                const removeItem = (id) => {
                    const remove = cartList.filter(item => item.id !== id)     
                    if(remove){cartList.splice(remove, 1)}
                    console.log(remove);
                }

                const checkQuantity = () => {
                    let totalQuantity = 0
                    cartList.forEach(item => totalQuantity += item.cantidad)
                    console.log(totalQuantity)
                }

                const checkPrice = () => {
                    let totalPrice = 0
                    cartList.forEach(item => totalPrice += item.cantidad * item.price)
                    console.log(totalPrice)
                }

    checkPrice();


    checkQuantity()


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
            removeItem        
            }}>
            {children} 
        </CartContext.Provider>
    )
}


/*El prop CHILDREN adquiere las propiedades de todos los nodos hijos */