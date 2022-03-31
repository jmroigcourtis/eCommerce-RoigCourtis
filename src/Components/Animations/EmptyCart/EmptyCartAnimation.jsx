import Lottie from "lottie-web";
import { useEffect, useRef } from "react";

const EmptyCartAnimation = () => {
    const container = useRef(null)

    useEffect(()=>{
        Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./lf30_oqpbtola.json')
        })
    },[])

    return <div className="container emptyCart d-flex justify-content-center" style={{width: '500px', height: '500px'}} ref={container}></div>
}

export default EmptyCartAnimation
