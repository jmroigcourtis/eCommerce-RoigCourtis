import RemeraNegra from '../Images/Remera_Negra.jpg'
import RemeraRoja from '../Images/Remera_Roja.jpg'
import RemeraTurquesa from '../Images/Remera_Turquesa.jpg'
import RemeraRosa from '../Images/Remera_Rosa.jpg'

const productos = [
        {id : 1, title : "Remera básica", description : 'Negra', price: '1200', pictureURL: RemeraNegra},
        {id : 2, title : "Remera básica", description : 'Roja', price: '1200', pictureURL: RemeraRoja},
        {id : 3, title : "Remera básica", description : 'Turquesa', price: '1200', pictureURL: RemeraTurquesa},
        {id : 4, title : "Remera básica", description : 'Rosa', price: '1200', pictureURL: RemeraRosa },
    ]
    
export const getFetch = new Promise ((resolve, reject) => {
        
        let data = productos
        if(data === productos) {
            setTimeout(() => {
                resolve(productos)
            }, 2000) 
        }else {
            setTimeout(() => {
                reject('Error')
            },2000)
        }
    })
