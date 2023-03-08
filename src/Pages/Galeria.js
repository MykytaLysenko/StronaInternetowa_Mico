import React, { Component } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
//import * as images from "../assets/galeria"
import img1 from "../assets/galeria/01.jpg"
import img2 from "../assets/galeria/02.jpg"
import img3 from "../assets/galeria/03.jpg"
import img4 from "../assets/galeria/04.jpg"
import img5 from "../assets/galeria/05.jpg"
import img6 from "../assets/galeria/06.jpg"
import img7 from "../assets/galeria/07.jpg"
import img8 from "../assets/galeria/08.jpg"
import img9 from "../assets/galeria/09.jpg"
import img10 from "../assets/galeria/10.jpg"
import img11 from "../assets/galeria/11.jpg"
import img12 from "../assets/galeria/12.jpg"
import img13 from "../assets/galeria/13.jpg"
import img14 from "../assets/galeria/14.jpg"
import img15 from "../assets/galeria/15.jpg"
import img16 from "../assets/galeria/16.jpg"
import img17 from "../assets/galeria/17.jpg"
import img18 from "../assets/galeria/18.jpg"
import img19 from "../assets/galeria/19.jpg"
import img20 from "../assets/galeria/20.jpg"
import img21 from "../assets/galeria/21.jpg"
import img22 from "../assets/galeria/22.jpg"
import img23 from "../assets/galeria/23.jpg"
import img24 from "../assets/galeria/24.jpg"
import img25 from "../assets/galeria/25.jpg"
import img26 from "../assets/galeria/26.jpg"
import img27 from "../assets/galeria/27.jpg"
import img28 from "../assets/galeria/28.jpg"
import img29 from "../assets/galeria/29.jpg"
import img30 from "../assets/galeria/30.jpg"
import img31 from "../assets/galeria/31.jpg"
import img32 from "../assets/galeria/32.jpg"
import img33 from "../assets/galeria/33.jpg"
import img34 from "../assets/galeria/34.jpg"
import img35 from "../assets/galeria/35.jpg"
import img36 from "../assets/galeria/36.jpg"
import img37 from "../assets/galeria/37.jpg"
import img38 from "../assets/galeria/38.jpg"
import img39 from "../assets/galeria/39.jpg"

var images=[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39];

export default class Home extends Component {

    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4}}
            >
                <Masonry
                    columnsCount={4}
                    gutter="10px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block" }}
                            alt={i + 1}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}
