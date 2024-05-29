import React from 'react'
import { SkillsX } from "../databases/Skills.jsx"
import { delay, motion } from "framer-motion"

const Skills = () => {
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
    <div id='skills' className='min-h-[calc(100vh-70px)] pt-[70px] px-[10%]'>
      <h1 className='text-[32px] font-[600] mb-5'>Skills</h1>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5'>
        {SkillsX.map(item => (
          <motion.div initial='offscreen' whileInView='onscreen' viewport={{ once: true, amount: 0.8 }} transition={{ delay: item.delay }} className='cursor-pointer hover:scale-[101.5%] transition duration-300 text-white'>
            <motion.div variants={cardVariants(item.delay)} style={{ backgroundColor: item.color }} className='p-5 rounded-md flex flex-col justify-between items-center' key={item.title}>
              <div className='flex flex-col sm:flex-row  sm:gap-2 items-center w-full md:py-5'>
                <p className='text-[32px] md:text-[53px]'>{item.icon}</p>
                <p className='md:text-[20px] font-[600] whitespace-nowrap	'>{item.title}</p>
              </div>
              <div className='flex item-center w-full gap-3'>
                <div className='flex w-full items-center'>
                  <div className='h-[3px] w-full rounded-full bg-white/30'>
                    <div className='bg-white h-full rounded-full' style={{ width: item.level }}></div>
                  </div>
                </div>
                <p>{item.level}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills