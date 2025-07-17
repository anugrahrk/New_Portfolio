import { useSetAtom } from 'jotai'
import React, { useEffect } from 'react'
import { ScreenSize } from '../atom/atom'

function ScreenResize() {
 const setWindowSize=useSetAtom(ScreenSize)
  useEffect(()=>{
    function ResizeWindow(){
      setWindowSize({
        width:window.innerWidth
    })}
    ResizeWindow()

    window.addEventListener('resize',ResizeWindow)
    return()=>window.removeEventListener('resize',ResizeWindow)

  },[setWindowSize])

}

export default ScreenResize