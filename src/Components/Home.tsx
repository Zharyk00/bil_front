import React from "react";
import "../Styles/Home/Home.css";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
=======
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
>>>>>>> Kadyrbek00-main
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Autocomplete, FormHelperText, TextField } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
<<<<<<< HEAD
=======
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
>>>>>>> Kadyrbek00-main
import "swiper/css/navigation";
import { main, submain, specialists } from "./Service"



function Home() {

  return (
    <div className="main_home">
<<<<<<< HEAD
      <Swiper
        loop={true}
        speed={1000}
        navigation={true}
        spaceBetween={5}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src="https://www.montclair.edu/responsive-media/cache/university-communications/wp-content/uploads/sites/144/2020/04/050713_8369_Campus.jpg.3.2x.generic.jpg"
            alt="photos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src="https://villabrandestini.com/images/contact/contact_welcome_background_3.1560202639.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src="https://cdn.shopify.com/s/files/1/1571/4849/collections/Avalana_collection1.jpg?v=1582288218"
            alt="photos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src="https://www.altacrystalresort.com/wp-content/uploads/2022/02/intricate-explorer-_xzx1XZ1taI-unsplash-scaled-e1644540633406-1500x450.jpg"
            alt="photos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ maxWidth: "100%", maxHeight: "100%" }}
            src="https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/daytona-beach-resort/media/cache/Daytona-Hero-Daytona-Local-Events-5bd720e7dc441-1500x450.jpg"
            alt="photos"
          />
        </SwiperSlide>
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
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque
            fuga{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque
            fuga{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque
            fuga{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque
            fuga{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="image"
          />
          <p style={{ margin: "0px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            deserunt amet fuga aperiam unde! Assumenda voluptate sapiente neque
            fuga{" "}
          </p>
        </SwiperSlide>
      </Swiper>
=======
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
>>>>>>> Kadyrbek00-main

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

export default Search;
<<<<<<< HEAD
=======
=======
export default Search;
>>>>>>> 3ea7b6b8a7feb0957a0b698d5274309a19be0172
=======
export default Home;
>>>>>>> cfffc4f3254c38268da0cca10f089daf127812ee
>>>>>>> Kadyrbek00-main
