import Slider from "react-slick";

export default function HeroSection() {
    const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        };

    return (
          <div className="relative before:bg-gradient-to-r before:bg-primary-brand-color ">
            <Slider {...settings}>
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