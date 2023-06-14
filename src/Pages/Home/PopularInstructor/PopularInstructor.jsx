import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import useInstructor from "../../../Hooks/useInstructor";

const PopularInstructor = () => {
  const [instructors] = useInstructor();
  console.log("from Instructors", instructors);
  return (
    <div className="my-20">
      <div className="text-center my-20">
        <h1 className="text-4xl font-bold">Popular Instructor</h1>
        <p className=" md:w-1/4 mx-auto my-10">
          Here is Our mind blowing instructors they are working for you,
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
        }}
        loop="true"
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {instructors?.map((instructor) => {
          return (
            <SwiperSlide key={instructor._id}>
              <div className="text-center">
                <img
                  className="w-1/2 h-48 object-contain  mx-auto"
                  src={instructor.photo}
                  alt=""
                />
                <h2 className="text-2xl font-bold my-2">{instructor.name}</h2>
                <h2 className="font-bold">{instructor.email}</h2>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PopularInstructor;
