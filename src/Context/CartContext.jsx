import {createContext, useState} from 'react'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";



export const CartContext = createContext([])

export const CartContextProvider = ({children}) => { 
    const SwalAlert = withReactContent(Swal)
    const[cartList, setCartList] = useState([])
    const [producto, setProducto] = useState([])



            const addToCart = (item) => {
                    const checkForID = (id) => {
                    return cartList.find((item) => item.id === id)
                    }
                    
                    const addQuantity = () => {
                        const itemQuantity = cartList.map(item => item.id ? {...item, cantidad: item.cantidad++} : item);
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

                const addProductQuantity = (id) => {
                    const item = cartList.find(item => item.id === id )
                    if(item.cantidad >= 1) {
                        item.cantidad ++
                        return setCartList([...cartList])
                    }
                }

                const removeProductQuantity = (id) => {
                    const item = cartList.find(item => item.id === id )
                    if(item.cantidad >= 1) {
                        item.cantidad --
                        return setCartList([...cartList])
                    } 

                }
                
                const checkQuantity = () => {
                   return cartList.reduce((acc, value) => acc + (value.cantidad), 0) 
                                 
                }



                const totalPrice = () => {
                    return cartList.reduce( (acc, value) => acc + (value.cantidad * value.price), 0 ) 
                }
    totalPrice();

    const clearCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            setCartList,
            cartList,
            producto, 
            setProducto,
            addToCart,
            addProductQuantity,
            removeProductQuantity,
            clearCart,
            removeItem,
            totalPrice,
            checkQuantity
                                }}>
            {children} 
        </CartContext.Provider>
    )
}


