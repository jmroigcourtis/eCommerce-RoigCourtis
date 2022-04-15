import Carousel from 'react-bootstrap/Carousel'

const CarouselBanner = () => {
    return <Carousel className='mt-2'>
        <Carousel.Item interval={4000}>
        <img
            className="d-block w-100"
            src="https://i.ibb.co/X8zLxZC/Logi-G-hero-banner.jpg"
            alt="First slide"
        />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src="https://i.ibb.co/G3NvjdQ/Slider-Marca-Redragon-5.png"
            alt="Second slide"
        />
        </Carousel.Item>
    </Carousel>
    }

export default CarouselBanner