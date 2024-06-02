import { useColorMode } from '@chakra-ui/react'
import React from 'react'
import { socialData } from '../databases/Socials'
import logo from "../../public/logo.png"
import logoo from "../../public/logoo.png"
const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div id='contact' className='py-10 px-[10%]' style={colorMode === 'light' ? { backgroundColor: '#E2E8F0', color: "#1A202C" } : { backgroundColor: "#171923" }}>
      <h1 className='text-[32px] font-[600] mb-5'>Contacts</h1>
      <div className='flex justify-center gap-10 flex-col sm:flex-row items-center flex-wrap'>
        {socialData.map(item => (
          item.url.length === 0 ? (
            <div key={item.title} className='flex items-center gap-2'>
              <p>{item.icon}</p>
              <p>{item.title}</p>
            </div>
          ) : (
            <a key={item.title} href={item.url} target='_blank' className='flex items-center gap-2 hover:-translate-y-1 transition-all duration-300'>
              <p>{item.icon}</p>
              <p>{item.title}</p>
            </a>
          )
        ))}
      </div>
      <div className='w-full flex items-center justify-center sm:justify-normal gap-5 pt-10 my-10 sm:mb-0  border-t' style={colorMode === 'light' ? { borderColor: "#171923" } : { borderColor: "#ffffff" }}>
        <img src={colorMode === "light" ? logo : logoo} className='w-[80px] my-3' />
        <div className='leading-9'>
          <p className='text-[32px] space-mono'>Bekbaevich</p>
          <p className='text-[30px] space-mono'>Developer</p>
        </div>
      </div>
      <p className='text-[12px] sm:text-end text-center'>© 2024 Bekbaevich Developer | All rights are reserved</p>
    </div >
  )
}

export default Footer