import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
    <img src="https://www.jaguar.in/apripub/638041348975735352VU.jpg?v=1#desktop__1600x900" />
      </div>
      <div>
        <img src="https://www.jaguar.in/apripub/637539240036125776MJ.jpg?v=1#desktop__1600x900"/>
      </div>
      <div>
      <img src="https://www.jaguar.in/apripub/637892629656527812RT.jpg?v=1#desktop__Hero_carousel-%201600x900%20-%20Large%20Desktop_F-PACE.jpghttps://www.jaguar.in/apripub/637892629656527812RT.jpg?v=1#desktop__Hero_carousel-%201600x900%20-%20Large%20Desktop_F-PACE.jpg"/>
      </div>
    </Slider>
  );
}