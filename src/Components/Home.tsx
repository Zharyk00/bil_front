import React from "react";
import Slider from "react-slick";
import "../Styles/Home/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { main, submain, specialists } from "./Service";

function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="main_home">
      {/* <Slider
        autoplay={true}
        autoplaySpeed={1000}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {main.map((items) => {
          return (
            <img
              className="main_image"
              src={items.srcImg}
              key={items.id}
              alt="someimgage"
            />
          );
        })}
      </Slider>
      <div className="slider">
        <Slider {...settings}>
          {submain.map((items) => {
            return (
              <img
                className=""
                src={items.srcImg}
                key={items.id}
                alt="someimgage"
              />
            );
          })}
        </Slider>
      </div>
      <Slider {...settings}>
        {specialists.map((items) => {
          return <img src={items.srcImg} key={items.id} alt="someimgage" />;
        })}
      </Slider> */}
    </div>
  );
}

export default Home;
