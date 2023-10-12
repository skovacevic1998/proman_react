import React from "react";
import { Carousel } from "antd";
import img1 from "../../assets/homeImageList/img1.jpg";
import img2 from "../../assets/homeImageList/img2.jpg";
import img3 from "../../assets/homeImageList/img3.jpg";

export const HomeImageList: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} autoplay>
      <div>
        <img className="homepage_image" src={img1} alt="img" />
      </div>
      <div>
        <img className="homepage_image" src={img2} alt="img" />
      </div>
      <div>
        <img className="homepage_image" src={img3} alt="img" />
      </div>
    </Carousel>
  );
};
