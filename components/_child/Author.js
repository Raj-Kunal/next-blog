import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
function Author({ name, img, designation}) {

  if(!name && !img) {
   return (
  <></>
)}
  return (
    <div className="author flex  py-5" >
    <Image src={"/images/author/author1.jpg"} className="rounded-full " width={60} height={60}/>
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"}><a className="text-md font-bold text-gray-800 hover:text-gray-600">{name || "No Name"}</a></Link>
        <span className="text-sm text-gray-500">{designation || "Unknown"}</span>
      </div>
    </div>
  )
}

export default Author
