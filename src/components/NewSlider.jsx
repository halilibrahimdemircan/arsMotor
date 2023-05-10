import React from "react";
import Slider from "react-slick";
import { data } from "../data";
const NewSlider = ({ imgs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider style={{ height: "300px" }} {...settings}>
        {imgs.map((img) => (
          <div className=" d-flex justify-content-center">
            <img
              style={{ width: "400px", height: "300px" }}
              src={img}
              alt={imgs.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewSlider;
