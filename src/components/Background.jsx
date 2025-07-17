import { useAtom } from 'jotai';
import React from 'react'
import { ThemeAtom } from '../atom/atom';
import ParticlesBackground from './Particles';

function Background() {
    const [theme, setTheme] = useAtom(ThemeAtom)
      const dark = "#111827";
      const light = "#ffffff";
  return (
    <div><div className={`fixed inset-0 -z-10  ${!theme ? "dark" : ""}`}>
      <div className="absolute inset-0 w-full h-full grad  bg-primary dark:bg-background-dark"></div>
      <ParticlesBackground
        color={!theme ? light : dark}
      />
      </div></div>
  )
}

export default Background