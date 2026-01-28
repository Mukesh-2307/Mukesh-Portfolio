import React from 'react'

const projList = [
    {
        name: "AWS-Hosted Portfolio Website",
        type: "Development",
        year: '2025',
        tech: ["React.js", "AWS S3", "AWS CloudFront", "AWS Route 53"]
    },
    {
        name: "Google Maps Clone - Geolocation Routing Application",
        type: "Development",
        year: '2024',
        tech: ["JavaScript", "Python", " Leaflet.js", "OSMnx Lib"]
    },
    {
        name: "iNoteBook - FullStack Notes Taking Application",
        type: "Development",
        year: '2024',
        tech: ["React.js", "Express", "Node.js", "MongoDB", "JWT Auth", "BCrypt.js"]
    },
]

const ProjectList = () => {
    return (
        <>
            {projList?.map((proj, index) => {
                return (
                    <div className='flex flex-col text-[40px]/[48px] my-16 pb-10 border-b-[0.5px] border-[var(--color-light-gray)] gap-10' key={index}>
                        <div className='flex justify-between items-start'>
                            <p className='max-w-[1000px]'>{proj.name}</p>
                            <p>{proj.type}</p>
                        </div>
                        <div className='flex justify-between items-start'>
                            <p>{proj.year}</p>
                            <div className='flex gap-4 w-[700px] justify-end flex-wrap'>
                                {
                                    proj.tech?.map((tech, index) => {
                                        return (
                                            <p key={index}>{tech},</p>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectList