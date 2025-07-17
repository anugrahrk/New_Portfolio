import { useAtom } from 'jotai'
import React from 'react'
import { ThemeAtom } from '../atom/atom'
import Background from '../components/Background'
import Header from '../components/Header'
import DraggableButtons from '../components/Dragabble'
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiPostgresql, SiPrisma } from "react-icons/si";


function About() {
     const techList = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
    { name: "Express", icon: SiExpress, color: "text-gray-700" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
    { name: "Prisma", icon: SiPrisma, color: "text-purple-600" },
    { name: "Python", icon: FaPython, color: "text-blue-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  ];
    const [theme, setTheme] = useAtom(ThemeAtom)
  return (
    <div className={`${!theme?'dark':''}`}>
        <Background></Background>
      <Header />
      <div className='absolute backdrop-blur-xs p-6 top-25 border dark:text-white dark:border-gray-700 border-gray-200 bg-white/10 rounded-lg m-5 md:ml-50 md:mr-50'>
        <div>
         <div className='font-sans font-light text-md pb-2'>   I’m a dedicated full stack developer with a strong focus on the MERN stack — MongoDB, Express.js, React, and Node.js. I enjoy building end-to-end web applications that are fast, scalable, and user-friendly.</div>

<div className='font-sans font-light text-md pb-2'> My approach combines clean code, thoughtful UI/UX, and efficient backend logic to create seamless experiences. Whether it's developing RESTful APIs, managing application state, or crafting responsive interfaces, I love working across the stack to bring ideas to life.</div>

<div className='font-sans font-light text-md pb-2'> I’m actively looking for opportunities where I can apply my skills, learn from real-world challenges, and contribute to impactful products as part of a collaborative team.</div>
        </div>
      <div className='pt-3 pb-5 text-xl font-semibold font-sans'>Skills</div>
      <div className='grid grid-cols-3 gap-3 md:grid-cols-6'>
        {techList.map((tech)=><DraggableButtons key={tech.name} icon={tech.icon} color={tech.color} name={tech.name}></DraggableButtons>)}</div>
    
      </div>
      
        
    </div>
  )
}

export default About