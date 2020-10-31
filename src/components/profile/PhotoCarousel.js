import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../../img/PhotoCarousel/1.jpg"
import img2 from "../../img/PhotoCarousel/2.jpg"
import img3 from "../../img/PhotoCarousel/3.jpg"
import img4 from "../../img/PhotoCarousel/4.jpg"
import img5 from "../../img/PhotoCarousel/5.jpg"
import img6 from "../../img/PhotoCarousel/6.jpg"
import img7 from "../../img/PhotoCarousel/7.jpg"

export default class PhotoCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed:1700,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      adaptiveHeight:false,
      centerMode:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            centerMode:false,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false,
            initialSlide: 2,
          },
        },
        
      ],
    };
    return (
      <div className="container_carousel">
        <Slider className="photo_carousel" {...settings}>
        <img data-lazy src={img7}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
        <img src={img5}></img>
        <img src={img6}></img>
        <img src={img1}></img>
        </Slider>
      </div>
    );
  }
}
