import IronMan from '../Images/IronManEndGame.jpg'
import HarryPotterOwl from '../Images/HarryPotterOwl.jpg'
import LukeSkyWalkerGrogu from '../Images/LukeSkyWalkerGrogu.jpg'
import DrStrangeWhatIf from '../Images/DrStrangeWhatIf.jpg'

export const products = [
            {id : '1', title : "Iron Man", description : 'Funko Pop representativo de la pelea entre IronMan y Thanos', price: '1200', stock: 'Disponible (5)', image: IronMan},
            {id : '2', title : "Harry Potter", description : 'Funko Pop representativo de Harry Potter y Hedwig', price: '2500', stock: 'Disponible (5)', image: HarryPotterOwl},
            {id : '3', title : "Luke Skywalker", description : 'Funko Pop representativo de la serie "The Mandalorian" ', price: '2000', stock:'Disponible (5)', image: LukeSkyWalkerGrogu},
            {id : '4', title : "Dr.Strange", description : 'Funko Pop representativo del Dr.Strange en la serie "What If" ', price: '6000', stock: 'Disponible (5)', image: DrStrangeWhatIf }
    
        ]
    
export const getFetch = new Promise ((resolve, reject) => {
        
        let data = products
        if(data === products) {
            setTimeout(() => {
                resolve(products)
            }, 2000) 
        }else {
            setTimeout(() => {
                reject('Error')
            },2000)
        }
    })


