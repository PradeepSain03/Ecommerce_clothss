import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner11.jpg'
import banner2 from '../assets/banner222.jpg'
import banner3 from '../assets/banner3333.jpg'
import banner4 from '../assets/banner5.jpg'

export default function Banner(){
    return (
        <>
        <div className="mt-[20px] ">
  <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />
   
      </Carousel.Item>
    </Carousel>
    </div>
        </>
    )
}
