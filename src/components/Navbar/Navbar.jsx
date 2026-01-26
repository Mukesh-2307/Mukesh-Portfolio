import React from 'react'
import './Navbar.css'
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { MdOutlineAssignment } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { Link, useLocation } from "react-router";
import { motion } from 'framer-motion'


const navbarItems = [
    { label: "Home", link: "/", icon: <HiOutlineHome /> },
    { label: "Projects", link: "/projects", icon: <HiOutlineBriefcase /> },
    { label: "About", link: "/about", icon: <MdOutlineAssignment /> },
]

const Navbar = () => {
    return (
        <motion.nav 
            className='flex justify-between items-center px-10'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
        >
            <motion.div 
                className='nav-item-border p-4 rounded-full flex gap-4 justify-evenly items-center cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                <div className='h-12 w-12 bg-[var(--color-creame)] rounded-full'></div>
                <p>MUKU</p>
            </motion.div>
            <div>
                <ul className='nav-item-border p-4 rounded-full list-none flex items-center gap-16 h-[82px]'>
                    {navbarItems.map((navItem, index) => {
                        return (
                            <ListItem navItem={navItem} key={index} index={index} />
                        )
                    })}
                </ul>
            </div>
            <div>
                <motion.button 
                    className='nav-item-border p-4 rounded-full h-[82px] cursor-pointer flex gap-2 items-center justify-between'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <HiOutlinePhone />Contact Me
                </motion.button>
            </div>
        </motion.nav>
    )
}

const ListItem = ({ navItem, index }) => {
    const location = useLocation();
    const isActive = location.pathname === navItem.link;

    return (
        <motion.li 
            className='cursor-pointer flex gap-2 items-center justify-between'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {navItem.icon}
            <Link 
                to={navItem.link} 
                className={`no-underline transition-colors duration-200 ${isActive ? 'text-[var(--color-purple)]' : ''}`}
            >
                {navItem.label}
            </Link>
        </motion.li>
    )
}

export default Navbar