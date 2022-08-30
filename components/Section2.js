import Post from "./Post";

import Posts from "../pages/api/data";

const Section2 = () => {

  const data = Posts.Posts;

  return (
    <div className="container px-2 mx-auto md:px-20 py-10">
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
