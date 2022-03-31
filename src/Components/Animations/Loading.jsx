import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import LoadingStyle from './Loading.css'

const LoadingAnimation = () => {
    const container = useRef(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./lf30_editor_agetgv5f.json')
        })
    },[])

    return <div className="container pacman d-flex justify-content-center" style={{width: '500px', height: '500px'}} ref={container}></div>
}

export default LoadingAnimation
