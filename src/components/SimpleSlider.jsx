
import React, { Component } from "react";
import Slider from "react-slick";
    
    export default class SimpleSlider extends Component {
      render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
            <div>
  <img  src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"  />
    <h3>1</h3>
  </div>
  <div>
  <img  src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"  />
    <h3>2</h3>
  </div>
  <div>
  <img  src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"  />
    <h3>3</h3>
  </div>
            </Slider>
          </div>
        );
      }
    }