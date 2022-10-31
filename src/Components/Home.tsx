import React, { useState } from "react";
import "../Styles/Home/Home.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCube,
  Pagination,
  Autoplay,
  EffectCards,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";

function Search() {
  const [region, setRegion] = useState<string>("4");

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };
  return (
    <div className="main_home">
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
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>hello world i am web developer</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

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

export default Search;
