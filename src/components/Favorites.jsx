import { useEffect, useState } from "react";
import categoryData from 'api/categories.json';
import Category from "./ui/Category";

export default function Favorites() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2
  };

return (
    <div className="relative before:bg-gradient-to-r before:bg-primary-brand-color before:to-transparent before:absolute before:insert-0 before:w-full before:h-full before:z-1 ">
      <Slider {...settings }>
      
        <div>
          <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"  />
        </div>

        <div>
        <img className="w-full h-[500px] object-cover" src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"  />
      </div>
      </Slider>
    </div>
  )
}