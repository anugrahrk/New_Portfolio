import React, { useEffect } from 'react'
import ParticlesBackground from '../components/Particles'
import Header from '../components/Header'
import { useAtom, useSetAtom } from 'jotai';
import { ScreenSize, ThemeAtom } from '../atom/atom';
import DraggableButtons from '../components/Dragabble';
import Background from '../components/Background';
import BoxContainer from '../components/BoxContainer';

function Home() {
    const [theme, setTheme] = useAtom(ThemeAtom)
  
  return (

    <div className={`${!theme?'dark':''} overflow-hidden`}>
        <Background></Background>
      <Header />
      <BoxContainer/>
      
        
    </div>
  )
}

export default Home