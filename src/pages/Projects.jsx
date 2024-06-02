import React from 'react'
import { ProjectsData } from '../databases/ProjectsData'
import { useColorMode, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import { CgMoon, CgSun } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
import { IoChevronBackOutline } from "react-icons/io5";

const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const cardVariants = (i) => {
    return {
      offscreen: {
        y: 40,
        opacity: 0,
      },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: i
        }
      }
    }
  }

  return (
    <div className='w-full px-[10%]'>
      <div className='sticky top-0 left-0 h-[70px] flex items-center justify-between sm:px-0 w-full z-10 backdrop-blur-sm' style={colorMode === 'light' ? { backgroundColor: "#ffffff90" } : { backgroundColor: "#1A202C99" }}>
        <NavLink to={"/"} className="flex items-center">
          <IoChevronBackOutline className='text-[24px]' />Home
        </NavLink>
        <button onClick={toggleColorMode} className='text-[20px]'>
          {colorMode === 'light' ? <CgMoon /> : <CgSun />}
        </button>
      </div>
      <div id='projects' className='min-h-[calc(100vh-70px)] flex flex-col '>
        <h1 className='text-[32px] font-[600] mb-10'>Projects</h1>
        <div className='grid lg:grid-cols-3 gap-5 pb-16'>
          {ProjectsData.map(item => (
            <motion.div key={item.title} initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} transition={{ delay: item.delay }}>
              <motion.a variants={cardVariants(item.delay)} style={{ backgroundColor: item.color }} key={item.title} href={item.url} target='_blank' className='relative rounded-md'>
                <img src={item.image} alt={item.title} className='rounded-md' />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/10 transition duration-300'>
                  <p style={colorMode === 'light' ? { backgroundColor: "#ffffff50" } : { backgroundColor: "#00000050" }} className=' w-fit text-[12px] m-2 px-2 rounded-sm'>{item.title}</p>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects