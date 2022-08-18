import Author from "../../components/_child/Author"
import Format from "../../layout/Format"
import Image from "next/dist/client/image";
import Related from "../../components/_child/Related";
import Fetcher from "../../lib/Fetcher";
import Error from "../../components/_child/Error"
import Loading from "../../components/_child/Loading"
import { useRouter} from "next/router"
import { SWRConfig } from "swr";
import GetPosts from "../../lib/Helper";


const Page = ({fallback}) => {

  const router = useRouter();
  const { postId } = router.query;
  const {data, isError, isLoading} = Fetcher(`api/posts/${postId}`);

  if  (isError) {
    <Error />
  }

  if (isLoading) {
      <Loading />
  }

  return (
    <SWRConfig value={{fallback}}>
          <Article {...data} />
    </SWRConfig>
  )
} 

const Article = ({title, author, img, subtitle, description}) => {

  return (
   <Format>
        <section className="containe mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                {author? <Author {...author} /> : <></>}
          </div>
            <div className="post py-10">
                <h1 className="font-bold text-4xl text-center pb-5">{title || "No Title"}</h1>
                <p className="text-gray-500 text-xl text-center">{subtitle || "No Subtitle"}</p>
                <div className="py-10">
                <Image
                src={img}
                width={900}
                height={600}
                className="rounded"
              />
                </div>
                <div className="content text-gray-600 text-lg flex flex-col gap-4">
                  {description || "No description"}   
                </div>
            </div>
            <Related />
        </section>
   </Format>
  )
}

export default Page


export async function getStaticProps({params}){
  const {postId} = params;
  const posts = await GetPosts(postId);

  return {
    props:{
      fallback:{
        "/api/posts": posts
      }
    }
  }
}

export async function getStaticPaths(){
  const posts = await GetPosts();

  const paths = posts.map(value => {
    return {
      params:{
        postId: value.id.toString(),
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}