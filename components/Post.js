import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'
import Author from './_child/Author'
import Loading from './_child/Loading';


const Post = ({data}) => {

 if (data) {
 const {id, title, author, published, img, category} = data

  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img}
              width={500}
              height={350}
              className="rounded"
            />
          </a>
        </Link>
      </div>
      <div className="info flex flex-col justify-center py-4 ">
        <div className="category">
          <Link href={`/posts/${id}`}>
            <a className="text-orange-600 hover:text-orange-800">
              {category}
            </a>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className="text-gray-800 hover:text-gray-600">
              {" "}
              - {published}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}>
            <a className="text-3xl  font-bold text-gray-800 hover:text-gray-600">
              {title || "title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind 
                  text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                {author? <Author {...author} /> : <></>}
      </div>
    </div>
  );
 }
 else {
  return (
    <Loading />
  )
 }
  };

export default Post
