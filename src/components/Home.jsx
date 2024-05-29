import React from 'react'
import { motion } from "framer-motion"
import { useColorMode } from '@chakra-ui/react'
import logo from "../../public/logo.png"
import logoo from "../../public/logoo.png"
import myPhoto from "../../public/myPhoto.png"
import yellowLogo from "../../public/Yellow.png"
const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div id='#' className='relative pb-20 pt-10 sm:px-0 sm:max-h-[calc(100vh-70px)] sm:min-h-[calc(100vh-70px)] mx-auto flex items-center gap-10'>
      <div className='flex items-center flex-col w-full'>
        <motion.img initial={{ opacity: 0, translateX: "30%" }} animate={{ opacity: 1, translateX: 0, }} transition={{ duration: 2, delay: 0.5 }} src={yellowLogo} className='w-[250px] drop-shadow-lg mb-5' />
        <motion.h1
          initial={{ translateX: "-30%", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className='text-[32px] md:text-[40px] lg:text-[50px] font-[600] text-center leading-10'>
          Hello, I am <span className='text-yellow-500 whitespace-nowrap'>Islam Bekbaevich</span>
        </motion.h1>
        <motion.p className='space-mono text-center relative text-[12px] md:text-[16px] md:mt-5 px-1'>
          <motion.span
            className='absolute h-[100%] right-0 top-0'
            initial={{ width: "100%" }}
            animate={{ width: 0 }}
            transition={{ duration: 3, delay: 3 }}
            style={colorMode === "light" ? { backgroundColor: "white" } : { backgroundColor: "#1A202C" }}>
          </motion.span>
          One of the frontend developers of Karakalpakstan
        </motion.p>
      </div>
    </div>
  )
}

export default Home