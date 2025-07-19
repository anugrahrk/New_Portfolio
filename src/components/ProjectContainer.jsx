import React, { useEffect, useState } from 'react'
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectContainer({name,image,desc,tag,github,live}) {
  const[load,setLoad]=useState(false)
  return (
    <div className=' group border dark:border-gray-700 border-gray-200  rounded-2xl p-3 hover:shadow-lg shadow-gray-700 backdrop-blur-sm'>
        <div className=''>
          <img onLoad={()=>setLoad(true)} className={`w-[400px] h-[180px] object-cover ${load?"opacity-100":"opacity-0"} rounded-lg transform hover:scale-104  transition-transform duration-300 group-hover:scale-101 ease-in-out place-self-center border border-gray-200 dark:border-gray-700`}  src={image} alt="" />

</div>
        <div className='dark:text-white group-hover:text-blue-400 pt-2 text-xl font-semibold' >{name}</div>
        <div className='w-50\80 md:w-100 dark:text-white text-sm pt-2 pb-2 font-light'>{desc}</div>
        <div className='flex pt-3 pb-1'>{tag.map((tags)=><div className='rounded-4xl dark:text-white pl-3 pr-3 dark:bg-gray-700  bg-gray-100 p-1 mr-2 text-sm font-light'>{tags}</div>)}</div>
        <div className='md:flex justify-center grid md:m-2  gap-3 pt-2'>
          <button onClick={()=>window.open(github)} className='flex md:w-[200px] w-[350px] md:ml-2 justify-center dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:scale-105 transition duration-300 ease-in-out  rounded-lg border border-gray-300  dark:border-gray-700 place-items-center md:pl-20 md:pr-20 pt-2 pb-2 cursor-pointer'><FiGithub className='md:absolute md:left-17' />  Code</button>
          <button onClick={()=>window.open(live)} className='flex justify-center md:w-[200px] w-[350px] md:mr-2 dark:text-white transform hover:scale-105 hover:bg-blue-700 transition duration-300 ease-in-out bg-blue-500 rounded-lg place-items-center cursor-pointer pt-2 pb-2 md:pl-20 md:pr-20'><FaExternalLinkAlt className='mr-1'/>  Live</button></div>
    </div>
  )
}

export default ProjectContainer