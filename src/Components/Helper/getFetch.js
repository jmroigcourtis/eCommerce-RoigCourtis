import IronMan from '../Images/IronManEndGame.jpg'
import HarryPotterOwl from '../Images/HarryPotterOwl.jpg'
import LukeSkyWalkerGrogu from '../Images/LukeSkyWalkerGrogu.jpg'
import DrStrangeWhatIf from '../Images/DrStrangeWhatIf.jpg'
import joystickXbox1 from '../Images/joystick1.jpg'
import joystickXbox2 from '../Images/joystick2.jpg'
import joystickXbox3 from '../Images/joystick3.jpg'
import joystickXbox4 from '../Images/joystick4.jpg'
import joystickXbox5 from '../Images/joystick5.jpg'
import joystickXbox6 from '../Images/joystick6.jpg'
import joystickPS1 from '../Images/joystick7.jpg'
import joystickPS2 from '../Images/joystick8.jpg'
import joystickPS3 from '../Images/joystick9.jpg'
import joystickPS4 from '../Images/joystick10.jpg'

export const productos = [
            {id : '1', title : "Iron Man", description : 'Funko Pop representativo de la pelea entre IronMan y Thanos', price: '1200', stock: 'Disponible (5)', pictureURL: IronMan},
            {id : '2', title : "Harry Potter", description : 'Funko Pop representativo de Harry Potter y Hedwig', price: '2500', stock: 'Disponible (5)', pictureURL: HarryPotterOwl},
            {id : '3', title : "Luke Skywalker", description : 'Funko Pop representativo de la serie "The Mandalorian" ', price: '2000', stock:'Disponible (5)', pictureURL: LukeSkyWalkerGrogu},
            {id : '4', title : "Dr.Strange", description : 'Funko Pop representativo del Dr.Strange en la serie "What If" ', price: '6000', stock: 'Disponible (5)', pictureURL: DrStrangeWhatIf }
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


