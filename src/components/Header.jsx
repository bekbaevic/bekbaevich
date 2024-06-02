import { Box, Button, Divider, Text, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CgMoon } from "react-icons/cg";
import { CgSun } from "react-icons/cg";
import logo from "../../public/logo.png"
import logoo from "../../public/logoo.png"
import { NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoPlanetOutline } from "react-icons/io5";
import { MdOutlineLightbulb } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";


import { motion } from "framer-motion";

const Header = ({ isOpen, onOpen, onClose }) => {

  const headerMenuData = [
    {
      icon: <IoHomeOutline />,
      title: "Home",
      path: "#"
    },
    // {
    //   icon: <IoPlanetOutline />,
    //   title: "About me",
    //   path: "#about"
    // },
    {
      icon: <MdOutlineLightbulb />,
      title: "Skills",
      path: "#skills"
    },
    {
      icon: <AiOutlineFundProjectionScreen />,
      title: "Projects",
      path: "#projects"
    },
    {
      icon: <MdOutlinePermPhoneMsg />,
      title: "Contact",
      path: "#contact"
    }
  ]
  const { colorMode, toggleColorMode } = useColorMode()
  const [selectedItem, setSelectedItem] = useState(headerMenuData[0].title)

  return (
    <>
      <Box className='sticky top-0 left-0 right-0 h-[70px] flex items-center justify-between px-[20px] sm:px-0 sm:justify-center w-full z-10 backdrop-blur-sm' style={colorMode === 'light' ? { backgroundColor: "#ffffff90" } : { backgroundColor: "#1A202C99" }}>
        <button className='sm:hidden text-[20px] active:scale-90' onClick={onOpen} >
          <GiHamburgerMenu />
        </button>
        <Box className='flex items-center gap-5'>
          <ul className='flex items-center gap-1 font-[500]'>
            {headerMenuData.map(item => (
              <a href={item.path} onClick={() => setSelectedItem(item.title)} key={item.title} to={item.path} className='hidden relative px-4 py-1 rounded-sm sm:flex items-center transition-all duration-300'>
                <span className='text-[14px] sm:text-[16px]' style={colorMode === 'light' ? { color: "#1A202C" } : { color: "white" }}>{item.title}</span>
              </a>
            ))}
          </ul>
          <button onClick={toggleColorMode} className='text-[20px]'>
            {colorMode === 'light' ? <CgMoon /> : <CgSun />}
          </button>
        </Box>
      </Box>
    </>
  )
}

export default Header