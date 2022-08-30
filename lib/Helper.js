
// base url
// const baseUrl = "http://localhost:3000/api/posts";

import Posts from "../pages/api/data"
// endpoint: http://localhost:3000/api/posts

const GetPosts = (id) => {
    const posts = Posts.Posts;
    // const result = await fetch(`${baseUrl}`)
    // const posts = await result.json();
    if(id){
        return posts.find(value => value.id == id);
    }
    
    return posts;
}

export default GetPosts;