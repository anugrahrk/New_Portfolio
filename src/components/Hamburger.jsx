import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Hamburger({open}) {
    const location=useLocation()
    const path=location.pathname
    const navigate=useNavigate()
  return (
    <div className='bg-white/20 backdrop-blur-sm dark:bg-white/10 dark:text-white fixed z-50 top-24 left-7 w-md border border-gray-200 dark:border-gray-700 rounded-2xl p-5 grid gap-1 '>
        <div onClick={()=> navigate("/")} className={` flex  rounded-2xl  p-3  ${path=="/"?"dark:bg-white dark:text-black bg-black text-white ":" dark:text-white  hover:bg-gray-200 dark:hover:bg-gray-600 "}}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
<div className='pl-3'> Home
    </div>
</div>
        <div onClick={()=> navigate("/About")} className={`flex  rounded-2xl  p-3  ${path=="/About"?"dark:bg-white dark:text-black  ":" dark:text-white  hover:bg-gray-200 dark:hover:bg-gray-600 "}}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
 <div className='pl-3'> About
    </div></div>
        <div onClick={()=> navigate("/Projects")} className={`flex  rounded-2xl  p-3  ${path=="/Projects"?"dark:bg-white dark:text-black  ":" dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 "}}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>
 <div className='pl-3'> Projects
    </div></div>
        <div onClick={()=> navigate("/Contact")} className={`flex  rounded-2xl  p-3  ${path=="/Contact"?"dark:bg-white dark:text-black  ":" dark:text-white  hover:bg-gray-200 dark:hover:bg-gray-600 "}}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
<div className='pl-3'> Contact
    </div></div>
        
    </div>
  )
}

export default Hamburger