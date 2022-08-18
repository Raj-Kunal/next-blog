import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import Author from "./Author";
import Error from './Error';
import Loading from './Loading';
import Fetcher from '../../lib/Fetcher';

const Related = () => {
  const { data, isLoading, isError} = Fetcher("api/trending");
  if(isError) {
    <Error />
  }

  if(isLoading) {
    <Loading />
  }

  const Post = ({data}) => {

    const {id, title, author, img, published, category} = data;

    return (
      <div className="flex gap-5">
        <div className="image flex flex-col justify-start">
          <Link href={`/posts/${id}`}>
            <a>
              <Image
                src={img}
                width={300}
                height={200}
                className="rounded"
              />
            </a>
          </Link>
        </div>
        <div className="info flex justify-center flex-col">
          <div className="category">
            <Link href={`/posts/${id}`}>
              <a className="text-orange-600 hover:text-orange-800">
                {category || "Unknown"}
              </a>
            </Link>
            <Link href={`/posts/${id}`}>
              <a className="text-gray-800 hover:text-gray-600">
                {" "}
                - {published || "Unknown"}
              </a>
            </Link>
          </div>
          <div className="title">
            <Link href={`/posts/${id}`}>
              <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
                {title || "No Title"}
              </a>
            </Link>
          </div>
         {author? <Author {...author} /> : <></>}
        </div>
      </div>
    );
  };

  return (
    <section className="pt-20">
      <h1 className="font-bold text-3xl py-10">Related</h1>
      <div className="flex flex-col gap-10">
        {
          data?.map((value, index) => {
            return (
              <Post data={value} key={index} />
            )
          })
        }
      </div>
    </section>
  );
};

export default Related;
