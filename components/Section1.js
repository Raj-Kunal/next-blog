import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import Author from './_child/Author'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper"
// Import Swiper styles
import 'swiper/css';

import Posts from "../pages/api/data";


const Section1 = () => {
    const data = Posts.Trending;


    SwiperCore.use([Autoplay])
const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right"
}

  return (
   <section className='px-5 py-16' style={bg}>
    <div className="container mx-auto md:px-20 ">
        <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
        <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay:2000
      }} 
    >
     {
        data?.map((value, index) => {
            return(
                <SwiperSlide key={index}>
                    <Slide data={value} />
                </SwiperSlide>
            )
            })
     }
    </Swiper>
       
    </div>
   </section>
  )
}

function Slide({data}){

    const {id, title, author, published, img, category, description} = data

    return (
        <div className="grid md:grid-cols-2" >
            <div className="image">
                <Link href={`/posts/${id}`}><a><Image src={img} width={600} height={600} /></a></Link>
                
            </div>
            <div className="info flex flex-col justify-center">
                <div className="category">
                <Link href={`/posts/${id}`}><a className='text-orange-600 hover:text-orange-800'>{category || "Unknown"}</a></Link>
                <Link href={`/posts/${id}`}><a className='text-gray-800 hover:text-gray-600'> - {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</a></Link>
                </div>
                    <p className="text-gray-500 py-3">{description || "Unknown"}</p>
                    {author? <Author {...author} /> : <></>}

            </div>
        </div>
    )
}

export default Section1
