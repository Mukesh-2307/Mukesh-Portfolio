import React from 'react'

const expList = [
  {
    company: "Center For Development of Advanced Computing",
    start: "Mar 2025",
    end: 'Aug 2025',
    position: "Frontend Developer Intern"
  }
]

const ExperienceList = () => {
  return (
    <>
      {expList?.map((exp, index) => {
        return (
          <div className='flex flex-col text-[40px]/[48px] my-16 pb-10 border-b-[0.5px] border-[var(--color-light-gray)] gap-10' key={index}>
            <div className='flex justify-between items-start'>
              <p>{exp.company}</p>
              <p>{exp.position}</p>
            </div>
            <p>{exp.start} - {exp.end}</p>
          </div>
        )
      })}
    </>
  )
}

export default ExperienceList