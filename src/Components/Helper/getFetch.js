import IronMan from '../Images/IronManEndGame.jpg'
import HarryPotterOwl from '../Images/HarryPotterOwl.jpg'
import LukeSkyWalkerGrogu from '../Images/LukeSkyWalkerGrogu.jpg'
import DrStrangeWhatIf from '../Images/DrStrangeWhatIf.jpg'

export const productos = [
            {id : 1, title : "Iron Man Endgame", description : 'Funko Pop representativo de la pelea entre IronMan y Thanos', price: '1200', pictureURL: IronMan},
            {id : 2, title : "Harry Potter y Hedwig ", description : 'Funko Pop representativo de Harry Potter y Hedwig', price: '1200', pictureURL: HarryPotterOwl},
            {id : 3, title : "Luke Skywalker y Grogu", description : 'Funko Pop representativo de la serie "The Mandalorian" ', price: '1200', pictureURL: LukeSkyWalkerGrogu},
            {id : 4, title : "Dr.Strange What If", description : 'Funko Pop representativo del Dr.Strange en la serie "What If"', price: '1200', pictureURL: DrStrangeWhatIf }

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


