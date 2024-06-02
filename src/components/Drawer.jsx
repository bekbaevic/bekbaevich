import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoPlanetOutline } from "react-icons/io5";
import { MdOutlineLightbulb } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import logo from "../../public/logo.png"
import logoo from "../../public/logoo.png"
import { socialData } from '../databases/Socials';


const DrawerComp = ({ isOpen, onOpen, onClose }) => {
    const drawerMenuData = [
        {
            icon: <IoHomeOutline />,
            title: "Home",
            path: "#"
        },
        // {
        //     icon: <IoPlanetOutline />,
        //     title: "About me",
        //     path: "#about"
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

    return (
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                    <div className='w-full flex items-center justify-center'>
                        <img src={colorMode === "light" ? logo : logoo} className='w-[80px] my-3' />
                    </div>
                    <p className='space-mono text-[16px] font-[200] text-center'>Bekbaevich Developer</p>
                </DrawerHeader>
                <Divider />
                <DrawerBody>
                    <ul className='flex flex-col gap-4 font-[600] mt-10 '>
                        {drawerMenuData.map(item => (
                            <a onClick={onClose} href={item.path} key={item.title} to={item.path} className='relative flex items-center transition-all duration-300 hover:translate-x-4'>
                                <span className='text-[28px] p-1'>{item.icon}</span>
                                <span className='text-[16px] uppercase' style={colorMode === 'light' ? { color: "#1A202C" } : { color: "white" }}>{item.title}</span>
                            </a>
                        ))}
                    </ul>
                </DrawerBody>

                <DrawerFooter className='flex gap-3'>
                    {socialData.map(item => (
                        <button key={item.title} className='hover:-translate-y-2 transition-all duration-300'>{item.icon}</button>
                    ))}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default DrawerComp