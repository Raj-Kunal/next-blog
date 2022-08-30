// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import Author from "./_child/Author";
import Posts from "../pages/api/data";

const Section3 = () => {
  SwiperCore.use([Autoplay]);

  const data = Posts.Popular;



  return (
    <section className="container px-2 md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/* swiper */}
      <Swiper
        breakpoints={{
          720: {
            slidesPerView: 2,
            spaceBetweenSlides: 40,
          },
          320: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
      >
        {data?.map((value, index) => {
          return(
            <SwiperSlide key={index}>{<Post data={value} />}</SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  );
};

function Post({ data }){

  const { id, title, category, img, description, published, author } = data;

  return (
      <div className="grid px-2">
          <div className="images">
              <Link href={`/posts/${id}`}><a><Image src={img || ""} width={600} height={400} /></a></Link>
          </div>
          <div className="info flex justify-center flex-col py-4">
              <div className="cat">
                  <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No Category"}</a></Link>
                  <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || ""}</a></Link>
              </div>
              <div className="title">
                  <Link href={`/posts/${id}`}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</a></Link>
              </div>
              <p className="text-gray-500 py-3">
              {description || "No Description"}
              </p>
              { author ? <Author {...author}></Author> : <></>}
          </div>
      </div>
  )
}

export default Section3;
