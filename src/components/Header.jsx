import React, { useState } from 'react'
import { ScreenSize, ThemeAtom } from '../atom/atom';
import { useAtom } from 'jotai';
import { useLocation, useNavigate } from 'react-router-dom';
import Hamburger from './Hamburger';

function Header() {
const [theme, setTheme] =useAtom(ThemeAtom)
const[open,setOpen]=useState(false)
const[{width}]=useAtom(ScreenSize)
const navigate=useNavigate()

const location=useLocation() 
const path=location.pathname

const hideRouteOn=['/']
const shouldHide=hideRouteOn.includes(location.pathname)
  return (
    <div className={`${!theme?'dark':''}`}>
        {! shouldHide &&
        <div className='fixed dark:text-white text-black top-8.5 left-28 font-bold text-2xl'>
            ANUGRAH RK
        </div>}
        {width>800?(<div className="fixed flex w-lg border border-slate-200 dark:border-0 h-16 z-10 top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      backdrop-blur-xs bg-white/20 dark:bg-white/10
                      p-3  rounded-full shadow-lg text-black dark:text-white ">
                        <button onClick={()=> navigate("/")} className={`flex cursor-pointer  rounded-4xl w-25 h-10 p-2 ml-7 mr-2  ${path=="/"?"dark:bg-white dark:text-black bg-black text-white ":" dark:text-white  hover:bg-gray-200 dark:hover:bg-gray-600 "}}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
<div className='pl-3'> Home
    </div></button>
                        <button onClick={()=> navigate("/About")} className={`flex cursor-pointer  rounded-4xl w-25 h-10 p-2 mr-2  ${path=="/About"?"dark:bg-white dark:text-black bg-black text-white ":" dark:text-white  hover:bg-gray-200 dark:hover:bg-gray-600 "}}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
 <div className='pl-3'> About
    </div></button>
                        <button onClick={()=> navigate("/Projects")} className={`flex cursor-pointer  rounded-4xl w-25 h-10 p-2 mr-2  ${path=="/Projects"?"dark:bg-white dark:text-black bg-black text-white ":" dark:text-white  hover:bg-gray-200 dark:hover:bg-gray-600 "}}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>
 <div className='pl-3'> Projects
    </div></button>
                        <button onClick={()=> navigate("/Contact")} className={`flex cursor-pointer  rounded-4xl w-25 h-10 p-2 mr-2  ${path=="/Contact"?"dark:bg-white dark:text-black bg-black text-white ":" dark:text-white  hover:bg-gray-200 dark:hover:bg-gray-600 "}}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
<div className='pl-3'> Contact
    </div></button>
      </div>):(open?(<button onClick={()=>setOpen(!open)} className='fixed top-10 left-10 text-black dark:text-white rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>):(<button className='fixed top-10 left-10  text-black dark:text-white rounded-full' onClick={()=>setOpen(!open)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button>))}
      <button onClick={()=>setTheme(!theme)} className={`fixed top-7 right-10 dark:text-white text-black rounded-full p-2 ${theme?"hover:bg-black/10 hover:border-gray-50":"hover:bg-white/10 hover:border-gray-600"}`}>{!theme?
      (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>):(
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

)
}</button>
<div className={`fixed  w-full border-b border-gray-200 dark:border-zinc-800 ${open?'top-90 z-50':'top-24'}`}></div>
{open && 
<div className='fixed top-30 z-50'><Hamburger open={open}/></div>
}
</div>
  )
}

export default Header