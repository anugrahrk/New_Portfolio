import { useAtom } from 'jotai'
import React from 'react'
import { ThemeAtom } from '../atom/atom'
import Background from '../components/Background'
import Header from '../components/Header'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
    const [theme, setTheme] = useAtom(ThemeAtom)
  return (
    <div>
      <div className={`${!theme?'dark':''}`}>
        <Background></Background>
      <Header />
      <div className='md:flex md:justify-between p-5' >
        <div className='absolute top-35 dark:text-white  place-self-center border border-gray-200 dark:border-gray-700 md:w-150 md:h-107 rounded-2xl p-10 backdrop-blur-sm'>
          <div className='font-semibold text-2xl pr-20 pb-10'>Contact Information</div>
          <div className='flex'>
            <div className='rounded-md dark:bg-gray-700 bg-gray-200 pl-3 pr-3 pt-3'>
          <IoLocationOutline className=' size-6 text-red-500' />
            </div>
          <div className='pl-5'>
            <div className='font-semibold text-lg'>Location </div>
            <div className='font-light dark:text-gray-300 text-gray-500 '>Kannur</div>
          </div>
          </div>
          <div className='flex pt-8'>
            <div className='rounded-md dark:bg-gray-700 bg-gray-200 pl-3 pr-3 pt-3'>
              <MdOutlineLocalPhone className=' size-6 text-green-500'/>
            </div>
  
           <div className='pl-5'>
            <div className='font-semibold text-lg'>Phone </div>
            <div className='font-light dark:text-gray-300 text-gray-500'>+91-8075597891</div>
          </div>
          </div>
          <div className='flex pt-8'>
          <div className='rounded-md dark:bg-gray-700 bg-gray-200 pl-3 pr-3 pt-3'><CiMail className=' size-6 text-blue-500'/></div>
          <div className='pl-5'>
            <div className='font-semibold text-lg'>Email </div>
            <div className='font-light dark:text-gray-300 text-gray-500 '>anugrahrk@hotmail.com</div>
          </div>
          </div>
        </div>

        <div className='relative top-130 md:left-1/2 md:top-30 md:w-150 dark:text-white  place-self-center border border-gray-200 dark:border-gray-700 rounded-2xl p-11 backdrop-blur-sm mb-1'>
          <div className='pr-6'>
          <div className='font-semibold text-2xl pr-20 pb-5'>Connect with me</div>
          <div onClick={()=>window.open("https://x.com/rk_anugrah")} className='flex group pt-5 cursor-pointer dark:hover:bg-gray-800 hover:bg-blue-50 pb-4 rounded-lg  mb-2'>
            <div className='rounded-md  pl-3 pr-3 pt-1'><FaXTwitter className=' size-6 group-hover:text-blue-500'/></div>
          
          <div className='pl-5'>
            <div className='font-semibold text-lg'>Twitter </div>
          </div>
          </div>
          <div onClick={()=>window.open("mailto:anugrahrk6@gmail.com?subject=Portfolio Inquiry&body=Hey, I saw your portfolio and wanted to connect.")} className='flex group pt-5 cursor-pointer dark:hover:bg-gray-800 hover:bg-red-50 pb-4 rounded-lg  mb-2'>
            <div className='rounded-md  pl-3 pr-3 pt-1'><CiMail className=' size-6 group-hover:text-red-500'/></div>
          
          <div className='pl-5'>
            <div className='font-semibold text-lg'>Email </div>
          </div>
          </div>
          <div onClick={()=>window.open("https://web.whatsapp.com/send?phone=918075597891&text=Hi!%20I%20just%20came%20across%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch.")} className='flex group pt-5 cursor-pointer dark:hover:bg-gray-800 hover:bg-green-50 pb-4 rounded-lg  mb-2'>
            <div className='rounded-md  pl-3 pr-3 pt-1'><FaWhatsapp className=' size-6 group-hover:text-green-500' /></div>
          
          <div className='pl-5'>
            <div className='font-semibold text-lg'>WhatsApp </div>
          </div>
          </div>
          <div onClick={()=>window.open("https://www.linkedin.com/in/anugrahrk/")} className='flex group pt-5 cursor-pointer dark:hover:bg-gray-800 hover:bg-blue-50 pb-4 rounded-lg  mb-2'>
            <div className='rounded-md  pl-3 pr-3 pt-1'><FiLinkedin className=' size-6 group-hover:text-blue-500'/></div>
          
          <div className='pl-5'>
            <div className='font-semibold text-lg'>Linkedin </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Contact