import React from 'react'
import StackIcon from "tech-stack-icons";

import win from '/Windows 11.svg';
import lx from '/Linux.svg';

const row1 = [
  { name: "js" },
  { name: "typescript" },
  { name: "html5" },
  { name: "css3" },
  { name: "python" },
  { name: "java" },
]

const row2 = [
  { name: "react" },
  { name: "nodejs" },
  { name: "express" },
  { name: "bootstrap5" },
  { name: "tailwindcss" },
  { name: "framer", variant: "dark" },
]

const row3 = [
  { name: "mongodb" },
  { name: "mysql" },
  { name: "postgresql" },
  { name: "mongoose" },
]

const row4 = [
  { name: "git" },
  { name: "github", variant: "dark"},
  { name: "gitlab" },
  { name: "figma" },
  { name: "postman" },
  { name: "aws" },
]

const row5 = [
  // { name: "git" },
  { name: "linux"},
]

const TechStack = () => {
  return (
    <>
      <div className=' flex flex-col gap-10'>
        <TechStackItems techList={row1} />
        <TechStackItems techList={row2} />
        <TechStackItems techList={row3} />
        <TechStackItems techList={row4} />
        <TechStackItems techList={row5} />
      </div>
    </>
  )
}

const TechStackItems = ({ techList }) => {
  return (
    <div className=' flex gap-10'>
      {
        techList?.map((icon, index) => {
          return (
            <StackIcon key={index} className='size-16' {...icon}/>
          )
        })
      }

    </div>
  )
}

export default TechStack