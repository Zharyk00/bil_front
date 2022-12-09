import React, { useState } from "react";
import "../Styles/Home/Home.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function Search() {
  const [region, setRegion] = useState<string>("4");

  const handleChange = (event: SelectChangeEvent) => {
    setRegion(event.target.value as string);
  };
  return (
    <div className="main_home">

      <Swiper
        loop={true}
        speed={1000}
        navigation={true}
        spaceBetween={5}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img style={{ maxWidth: "100%", maxHeight: "100%" }} src="https://www.montclair.edu/responsive-media/cache/university-communications/wp-content/uploads/sites/144/2020/04/050713_8369_Campus.jpg.3.2x.generic.jpg" alt="photos" /></SwiperSlide>
        <SwiperSlide>
          <img style={{ maxWidth: "100%", maxHeight: "100%" }} src="https://villabrandestini.com/images/contact/contact_welcome_background_3.1560202639.jpg" /></SwiperSlide>
        <SwiperSlide>
          <img style={{ maxWidth: "100%", maxHeight: "100%" }} src="https://cdn.shopify.com/s/files/1/1571/4849/collections/Avalana_collection1.jpg?v=1582288218" alt="photos" /></SwiperSlide>
        <SwiperSlide>
          <img style={{ maxWidth: "100%", maxHeight: "100%" }} src="https://www.altacrystalresort.com/wp-content/uploads/2022/02/intricate-explorer-_xzx1XZ1taI-unsplash-scaled-e1644540633406-1500x450.jpg" alt="photos" /></SwiperSlide>
        <SwiperSlide>
          <img style={{ maxWidth: "100%", maxHeight: "100%" }} src="https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/daytona-beach-resort/media/cache/Daytona-Hero-Daytona-Local-Events-5bd720e7dc441-1500x450.jpg" alt="photos" /></SwiperSlide>
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
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque fuga </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque fuga </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque fuga </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque fuga </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque fuga </p>
        </SwiperSlide>
      </Swiper>

      <Swiper
        style={{ marginTop: "100px" }}
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