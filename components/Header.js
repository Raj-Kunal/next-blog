import React from "react";
import {ImFacebook, ImTwitter, ImYoutube} from "react-icons/im"
import Link from "next/link"

const header = () => {
  return (
    <header className="bg-gray-100">
      <div className="sm:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
      <div className="md:flex-none  order-2 sm:order-1 flex justify-center py-4 sm:py-0">
        <input type="text" className="mt-1 block w-60 px-3 py-2 bg-white border border-slate-300  rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="Search..." />
        </div>
        <div className="shrink-80 sm:order-2">
        <Link href={"/"}><a className="font-bold hover:cursor-pointer text-3xl">DESIGN</a></Link>
        </div>
       <div className=" order-3 flex justify-center">
       <div className="flex gap-6">
       <Link href={"/"}><a><ImFacebook color="#888888" /></a></Link>
       <Link href={"/"}><a><ImTwitter color="#888888" /></a></Link>
       <Link href={"/"}><a><ImYoutube color="#888888" /></a></Link>
        </div>
       </div>
      </div> 
    </header>
  );
};

export default header;
