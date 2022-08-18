import { info } from "autoprefixer";

// base url
const baseUrl = "http://localhost:3000/api/posts";


// endpoint: http://localhost:3000/api/posts

const GetPosts = async(id) => {
    const result = await fetch(`${baseUrl}`)
    const posts = await result.json();
    if(id){
        return posts.find(value => value.id == id);
    }
    
    return posts;
}

export default GetPosts;