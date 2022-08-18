
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper"

// Import Swiper styles
import 'swiper/css';


import Post from './Post';
import Error from "./_child/Error";
import Loading from "./_child/Loading";
import Fetcher from '../lib/fetcher';


const Section3 = () => {
  SwiperCore.use([Autoplay])

  const { data, isLoading, isError} = Fetcher("api/popular");

  if(isError) {
    <Error />
  }

  if(isLoading) {
    <Loading />
  }

  return (
    <section className="container md:px-20 py-16">
              <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
              {/* swiper */}
              <Swiper
              breakpoints={{
                720: {
                  slidesPerView: 2,
                  spaceBetweenSlides: 40
                }
              }}

  loop={true}
      autoplay={{
        delay:2000
      }} 
    >
      {
        data?.map((value, index) => {
          return (
             <SwiperSlide key={index} >{<Post data={value} />}</SwiperSlide>
           )}
          )
        }
    </Swiper>
    </section>
  )
}

export default Section3
