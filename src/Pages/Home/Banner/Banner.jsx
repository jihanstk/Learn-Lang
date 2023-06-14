import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
const Banner = () => {
  return (
    <div className="pt-20">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 2000,
          speed: 1000,
        }}
        loop="true"
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          {" "}
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div className="flex flex-col justify-center items-end">
              <div className="md:w-9/12 w-11/12 ">
                <h1 className="md:text-4xl text-2xl font-bold ">
                  The Language Catalyst Ignite Your Fluency through our
                  Cutting-Edge Online Program
                </h1>
                <p className="my-7">
                  Unlock the power of language and become a polyglot prodigy
                  with our captivating online language course! Whether you dream
                  of mastering multiple languages for personal enrichment,
                  professional advancement, or connecting with people from
                  diverse cultures, our program is designed to make your
                  language learning journey both exciting and effective
                </p>
              </div>
            </div>

            <img
              className="w-full h-full"
              src="https://res.cloudinary.com/tripactions/image/upload/v1671476788/site/navan-photography/lady-smiling-and-holding-books.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div className="flex flex-col justify-center items-end">
              <div className="md:w-9/12 w-11/12">
                <h1 className="md:text-4xl text-2xl font-bold ">
                  Ignite Your Linguistic Potential with our Language Course{" "}
                </h1>
                <p className=" my-7">
                  Unlock the power of language and become a polyglot prodigy
                  with our captivating online language course! Whether you dream
                  of mastering multiple languages for personal enrichment,
                  professional advancement, or connecting with people from
                  diverse cultures, our program is designed to make your
                  language learning journey both exciting and effective
                </p>
              </div>
            </div>

            <img
              className="w-full h-full"
              src="https://www.tdcx.com/static/6023cec2541e621b32071789726d0e57/18646/25ff5db311334e54b993a8aebe6dac30_726f8b0eaa.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 ">
            <div className="flex flex-col justify-center items-end">
              <div className="md:w-9/12 w-11/12">
                <h1 className="md:text-4xl text-2xl font-bold ">
                  Language Voyage Explore, Learn, and Conquer with our
                  Captivating Online Course
                </h1>
                <p className=" my-7">
                  Unlock the power of language and become a polyglot prodigy
                  with our captivating online language course! Whether you dream
                  of mastering multiple languages for personal enrichment,
                  professional advancement, or connecting with people from
                  diverse cultures, our program is designed to make your
                  language learning journey both exciting and effective
                </p>
              </div>
            </div>

            <img
              className="w-full h-full"
              src="https://www.kindpng.com/picc/m/748-7485082_online-course-wordpress-theme-hd-png-download.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
