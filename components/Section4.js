import Image from "next/dist/client/image";
import Author from './_child/Author'
import Link from 'next/dist/client/link'

import Error from "./_child/Error";
import Loading from "./_child/Loading";
import Fetcher from "../lib/fetcher";

const section4 = () => {

  const { data, isLoading, isError} = Fetcher("api/popular");

  if(isError) {
    <Error />
  }

  if(isLoading) {
    <Loading />
  }
  if(data) {
    return (
      <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
          <div className="item">
            <h1 className="font-bold text-4xl py-12">Business</h1>
            <div className="flex flex-col gap-6">
          { data[1]? <Post data={data[1]} />: <></> }
          { data[2]? <Post data={data[2]} />: <></> }
          { data[3]? <Post data={data[3]} />: <></> }
            </div>
          </div>
          <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
          { data[4]? <Post data={data[4]} />: <></> }
          { data[5]? <Post data={data[5]} />: <></> }
          { data[2]? <Post data={data[2]} />: <></> }
            </div>
          </div>
        </div>
      </section>
    );
  } 
  else {
    <Loading />
  }
  }
 
  
const Post = ({data}) => {

  const { title, author, published, img, category} = data


  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"}>
          <a>
            <Image
              src={img}
              width={300}
              height={250}
              className="rounded"
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="category">
          <Link href={"/"}>
            <a className="text-orange-600 hover:text-orange-800">
             {category || "Unknown"}
            </a>
          </Link>
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600">
              {" "}
              - {published || "Unknown"}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
             {title || "Unknown"}
            </a>
          </Link>
        </div>
        {author? <Author {...author} /> : <></>}
      </div>
    </div>
  );
};

export default section4;
