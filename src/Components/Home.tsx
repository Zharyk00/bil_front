import React from "react";
import "../Styles/Home/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { main, submain, specialists } from "./Service";

function Home() {
  return (
    <div className="main_home">
      <div className="container">
        <Swiper
          style={{ width: "100%" }}
          loop={true}
          speed={1000}
          navigation={true}
          spaceBetween={5}
          modules={[Navigation]}
        >
          {main.map((mainI) => {
            return (
              <SwiperSlide
                key={mainI.id}
                style={{ display: "grid", justifyContent: "center" }}
              >
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                  src={mainI.srcImg}
                  alt="photos"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Swiper
          style={{ width: "75%", marginTop: "30px" }}
          modules={[Autoplay]}
          speed={1000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            620: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {submain.map((subI) => {
            return (
              <SwiperSlide key={subI.id}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={subI.srcImg}
                  alt="Img"
                />
                {/* <p style={{ margin: "0px" }}>{subI.title}</p> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Swiper
        style={{ marginTop: "100px", width: "90%" }}
        modules={[Navigation]}
        loop={true}
        spaceBetween={5}
        speed={700}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
      >
        {specialists.map((spec) => {
          return (
            <SwiperSlide key={spec.id}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={spec.srcImg}
                alt="Img"
              />
              <p style={{ margin: "0px" }}>{spec.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Home;
