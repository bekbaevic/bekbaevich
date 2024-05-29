import React from 'react'
import myPhoto from "../../public/myPhoto.png"
import Banner from "../../public/1.png"
import { useColorMode } from '@chakra-ui/react'

const MyLife = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div id='about' className=''>
      <div className='h-full md:h-[calc(100vh-70px)] w-full relative md:rotate-0'>
        <img src={Banner} alt="my photo" className='max-h-full w-full object-cover object-bottom mx-auto' />
        <span className='absolute top-0 left-0 h-full w-full' style={colorMode === "light" ? {background: "#ffffff30"} : {backgroundColor: "#00000050"}} />
      </div>
    </div>
  )
}

export default MyLife 