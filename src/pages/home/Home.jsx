import React from 'react'
import './Home.css'
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import SectionTemplate from '../../components/sectionTemplate/SectionTemplate';
import ScrollAnimation from '../../components/animations/ScrollAnimation';
import TechStack from '../../components/TechStack';
import { motion } from 'framer-motion';

import videoBg from "../../assets/video_background_4.mp4"

import { BsFillCpuFill } from "react-icons/bs";
import { HiBriefcase } from "react-icons/hi2";
import { RiGitRepositoryFill } from "react-icons/ri";


import ExperienceList from '../../components/ExperienceList';
import Footer from '../../components/Footer/Footer';
import ProjectList from '../../components/ProjectList';

const socialsLink = [
  { label: 'twitter', link: 'https://x.com/MukeshK82578898' },
  { label: 'github', link: 'https://github.com/Mukesh-2307' },
  { label: 'linkedin', link: 'https://www.linkedin.com/in/mukeshdalai2307/' },
  { label: 'instagram', link: 'https://www.instagram.com/mukeshdalai.23/' },
]

const Home = () => {
  return (
    <>
      <div id="hero-section relative">
        <div className="overlay h-[calc(100vh-140px-128px)]"></div>
        <video src={videoBg} autoPlay loop muted className='z-0 h-[calc(100vh-140px-128px)]' id='videoBg'/>
        <div className='w-[calc(100vw-180px-290px)] h-[calc(100vh-140px-128px)] justify-self-center flex justify-center items-center absolute top-40'>
          <ScrollAnimation delay={0.2}>
            <div>
              <motion.h1
                className='text-[80px]/[94px]'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Hi I'm Mukesh,<br />a Software Engineer
              </motion.h1>
              <motion.p
                className='text-[var(--color-dark-gray)]'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                I build things for the internet. Sometimes they even work on the first try.
                <br />Specializing in MongoDB, Express, React, Node.js, and pretending I understand CSS Grid.
                <br />Currently making the web a little less broken, one commit at a time.
              </motion.p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className='px-10'>
        <ScrollAnimation delay={0.2}>
          <div className='flex items-center justify-between h-[calc(100vh-140px-650px)]'>
            <div>
              <p className='w-[140px]'>// Eat, Code, Sleep and Repeat</p>
            </div>

            <div>
              <ul className='flex gap-4 p-4 border-[0.5px] border-[var(--color-light-gray)] rounded-full'>
                {socialsLink.map((social, index) => {
                  return (
                    <ListItem social={social} key={index} index={index} />
                  )
                })}
              </ul>
            </div>

            <div>
              <motion.button
                className='flex items-center justify-between gap-4 p-4 border-[0.5px] border-[var(--color-light-gray)] rounded-full cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className='size-12 bg-[var(--color-creame)] rounded-full'></div>
                send an Email
              </motion.button>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className='flex items-start justify-between my-16'>
            <p className='title w-[840px]'>curious and driven individual who thrives on solving problems and learning new things.</p>
            <p className='title-s w-[440px] text-right'>What sets me apart is my ability to blend technical expertise with business outcomes.</p>
          </div>
        </ScrollAnimation>

      </div>
      <ScrollAnimation delay={0.1}>
        <SectionTemplate title="Tech Stack" subText="I bring tech solutions that boost efficiency, scalability, and impact for growing teams and businesses" MyComponent={TechStack} MyIconComponent={BsFillCpuFill} loadMore={false} colorScheme="--color-purple" />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <SectionTemplate title="Experience" subText="I have practical experience driving operational efficiency through software development, pipelines, and tech solutions in fast-paced, real-world environments" MyComponent={ExperienceList} MyIconComponent={HiBriefcase} loadMore={true} colorScheme="--color-pink" redirectTo="experience" />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <SectionTemplate title="Projects" subText="I've built impactful projects across web development, showcasing my ability to deliver real-world tech solutions" MyComponent={ProjectList} MyIconComponent={RiGitRepositoryFill} loadMore={true} colorScheme="--color-green" redirectTo="projects" />
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <Footer />
      </ScrollAnimation>
    </>
  )
}

const ListItem = ({ social, index }) => {
  return (
    <motion.li
      className='cursor-pointer size-12 bg-[var(--color-creame)] text-[var(--color-black)] flex justify-center items-center rounded-full'
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <a href={social.link} className='no-underline'>{social.label === 'twitter' ?
        <FaXTwitter /> : social.label === 'github' ? <FaGithub /> : social.label === 'linkedin' ? <FaLinkedinIn /> : <FaInstagram />}</a>
    </motion.li>
  )
}

export default Home