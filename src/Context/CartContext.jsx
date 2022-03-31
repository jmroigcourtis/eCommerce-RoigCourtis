import CartContextStyle from '../Context/CartContext.css'
import {createContext, useState, useEffect} from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



export const CartContext = createContext([])

export const CartContextProvider = ({children}) => { 
    const SwalAlert = withReactContent(Swal)
    const[cartList, setCartList] = useState([])
    const [producto, setProducto] = useState([])

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
                    if(newItem.cantidad === 0 ) {
                        SwalAlert.fire({
                            icon: 'error',
                            title: 'Epa!',
                            text: 'Para continuar tenes que agregar al menos un producto'
                        })
            
                    } else {
                        checkForID(item.id) ? addQuantity(item.id, item.cantidad) : setCartList([...cartList, newItem])
                    }
                    
                };    
                
                const removeItem = (id) => {
                    const filterCart = cartList.filter(item => item.id !== id)     
                    setCartList(filterCart)
                }
                
                const checkQuantity = () => {
                    return cartList.reduce((acc, value) => acc + (value.cantidad), 0)               
                }

                const totalPrice = () => {
                    return cartList.reduce( (acc, value) => acc + (value.cantidad * value.price), 0 ) 
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
            setCartList,
            cartList,
            producto, 
            setProducto,
            addToCart,
            clearCart,
            removeItem,
            totalPrice,
            checkQuantity
                                }}>
            {children} 
        </CartContext.Provider>
    )
}


/*El prop CHILDREN adquiere las propiedades de todos los nodos hijos */