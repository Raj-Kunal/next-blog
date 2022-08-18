import Fetcher from "../lib/fetcher";
import Post from "./Post";
import Error from "./_child/Error";
import Loading from "./_child/Loading";

const Section2 = () => {

  const { data, isLoading, isError} = Fetcher("api/posts");
  // if(data)
  // console.log(data);

  if(isError) {
    <Error />
  }

  if(isLoading) {
    <Loading />
  }

 

  return (
    <div className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {
          data?.map((value, index) => {
           return (
            <Post data={value} key={index} />
            
           )}
          )
        }
      </div>
    </div>
  );
};

export default Section2;
