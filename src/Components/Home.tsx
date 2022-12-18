import React from "react";
import "../Styles/Home/Home.css";
<<<<<<< HEAD
<<<<<<< HEAD
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
=======
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
<<<<<<< HEAD
  EffectCube,
  Pagination,
  Autoplay,
  EffectCards,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
=======
  Autoplay,
} from "swiper";

=======
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
>>>>>>> cfffc4f3254c38268da0cca10f089daf127812ee
import "swiper/css";
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
import "swiper/css/navigation";
import { main, submain, specialists } from "./Service"



function Home() {

  return (
    <div className="main_home">
<<<<<<< HEAD
<<<<<<< HEAD
      <Swiper
        effect={"cube"}
        grabCursor={true}
        // slidesPerView={1}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        speed={1000}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[EffectCube, Pagination, Autoplay]}
        loop={true}
        pagination={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>{" "}
      5
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={5}
=======
=======
      <div className="container">
        <Swiper
          loop={true}
          speed={1000}
          navigation={true}
          spaceBetween={5}
          modules={[Navigation]}
        >
          {main.map((mainI) => {
            return (
              <SwiperSlide key={mainI.id}>
                <img style={{ maxWidth: "100%", maxHeight: "100%" }} src={mainI.srcImg} alt="photos" />
              </SwiperSlide>
            )
          })}
        </Swiper>
>>>>>>> cfffc4f3254c38268da0cca10f089daf127812ee

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
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {submain.map(subI => {
            return (
              <SwiperSlide key={subI.id}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={subI.srcImg}
                  alt="Img"
                />
                {/* <p style={{ margin: "0px" }}>{subI.title}</p> */}
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>

      <Swiper
        style={{ marginTop: "100px" }}
        modules={[Navigation]}
        loop={true}
        spaceBetween={5}
        speed={700}
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
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
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
      >
        {specialists.map(spec => {
          return (
            <SwiperSlide key={spec.id}>
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={spec.srcImg}
                alt="Img"
              />
              <p style={{ margin: "0px" }}>{spec.title}</p>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  );
}

<<<<<<< HEAD
const regions = [
  { region: "Ош", value: 1 },
  { region: "Ысык-Кол", value: 2 },
  { region: "Жалал-Абад", value: 3 },
  { region: "Чуй", value: 4 },
  { region: "Баткен", value: 5 },
  { region: "Нарын", value: 6 },
  { region: "Талас", value: 7 },
];

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
];

<<<<<<< HEAD
export default Search;
=======
export default Search;
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
=======
export default Home;
>>>>>>> cfffc4f3254c38268da0cca10f089daf127812ee
