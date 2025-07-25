import { useAtom } from 'jotai'
import React from 'react'
import { ThemeAtom } from '../atom/atom'
import Background from '../components/Background'
import Header from '../components/Header'
import ProjectContainer from '../components/ProjectContainer'

function Project() {
    const [theme, setTheme] = useAtom(ThemeAtom)
    const project=[{
      name:"Food Ordering Website(Frontend)",
      desc:"Created a food ordering website using react and vite also used recoil for state management.",
      github:"https://github.com/anugrahrk/nextcrest",
      img:"/nextcrest.png",
      live:"https://nextcrest.vercel.app/",
      tags:["React","Recoil","TailwindCSS"]
    },
  {
      name:"Paywallet",
      desc:"Created a full stack money wallet where user can signup and send money to the other users.",
      github:"https://github.com/anugrahrk/PayWallet",
      img:"/paywallet.png",
      live:"https://pay-wallet-front.vercel.app/",
      tags:["React","MongoDB","Express.js","Node.js"]
    }]
  return (
    <div>
      <div className={`${!theme?'dark':''}`}>
        <Background></Background>
      <Header />
      <div className='absolute dark:text-white top-30 left-25 md:left-1/2 text-3xl font-bold font-sans md:place-self-center'>My Projects</div>
      <div className='absolute gap-6 top-45 p-2 md:pl-5 grid grid-cols-1 md:grid-cols-3 md:gap3'>
        {project.map((item)=><ProjectContainer name={item.name} image={item.img} desc={item.desc} tag={item.tags} github={item.github}
        live={item.live}/>)}
      </div>
      </div>
      </div>
  )
}

export default Project