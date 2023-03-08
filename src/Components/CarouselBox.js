import React, {Component} from "react";
import  Carousel  from "react-bootstrap/Carousel";
import firstImg from '../assets/carusel/33.jpg'
import twoImg from '../assets/carusel/3.jpg'
import three from '../assets/carusel/miko.jpg'


export default class CarouselBox extends Component{
    render() {
        return(
           <>
            <Carousel>
                <Carousel.Item>
                    <img
                     className="d-block-w-100"
                     src={firstImg}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className="d-block-w-100"
                     src={twoImg}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                     className="d-block-w-100"
                     src={three}
                    />
                </Carousel.Item>
            </Carousel>

            
           </>
        )

    }
}