import { createClient } from 'pexels'
import React from 'react'
import { ProjectsData } from '../databases/ProjectsData'
import { useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const ProjectsComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode()
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
    <div id='projects' className='min-h-[calc(100vh-70px)]  pt-[70px] flex flex-col px-[10%]'>
      <h1 className='text-[32px] font-[600] mb-10'>Projects</h1>
      <div className='grid lg:grid-cols-3 gap-5'>
        {ProjectsData.slice(0, 3).map(item => (
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
      <div className='text-center my-10'>
        <NavLink to={'projects'} className='text-center  hover:tracking-widest transition-all duration-300 w-fit'>See all projects</NavLink>
      </div>
    </div>
  )
}

export default ProjectsComponent