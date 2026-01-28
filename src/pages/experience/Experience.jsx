import React from 'react'
import { HiBriefcase } from "react-icons/hi2";
import Footer from '../../components/Footer/Footer';

const experiences = [
  {
    title: "Frontend Developer Intern",
    location: "Guwahati, Assam",
    company: "Center For Development of Advanced Computing",
    duration: "Mar 2025 - Aug 2025",
    points: [
      "Developed responsive web-based user interfaces for an E-Learning platform using React.js, TailwindCSS and ShadCN, improving UI responsiveness and achieving a 15% increase in user engagement over 3 months.",
      "Collaborated with cross-functional teams of 5 engineers in an agile development environment to translate customer requirements into innovative product features, conducting daily standups and sprint planning.",
      "Integrated RESTful APIs using Node.js and Express.js with Java Spring Boot backend; implemented unit testing and participated in peer code reviews to ensure code quality and best practices.",
      "Optimized client-server communication using AJAX and HTTP protocols, ensuring data consistency across modules and reducing API response time by 20%.",
      "Utilized Git for source control management and followed CI/CD principles to ship code rapidly in a fast-paced environment."
    ],
  },
];

const Experience = () => {
  return (
    <>
      <div className='px-10 my-10 flex flex-col' id="projects">
        <div className='border-b-[0.5px] border-[var(--color-light-gray)] pb-6 relative'>
          <h1 className={`title`} style={{ color: `var(--color-pink)` }}>Experience</h1>
          <p className=' text-[var(--color-dark-gray)]'>I have practical experience driving operational efficiency through software development, pipelines, and tech solutions in fast-paced, real-world environments</p>
          <div className='size-24 bg-[var(--color-creame)] absolute right-[100px] -bottom-[50px] rounded-full flex justify-center items-center' style={{ color: `var(--color-pink)` }}>
            <HiBriefcase className='size-12' />
          </div>
        </div>

        <div className="relative pt-10 mb-10">
          {/* Vertical Line */}
          <div className="absolute left-5 top-11 h-full border-l border-gray-700"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((experiences, index) => (
              <div key={index} className="relative pl-12">

                {/* Circle Marker */}
                <div
                  className={`absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-gray-800 bg-[var(--color-pink)] shadow-[0_0_10px_rgba(244,114,182,0.7)]`}
                ></div>

                {/* Project Details */}
                <h3 className='text-[40px]/[48px]'>
                  {experiences.title}
                </h3>
                <p className="text-[30px]/[38px]">{experiences.location}</p>
                <p className="text-gray-400 mb-3 text-[30px]/[38px]">{experiences.company}</p>

                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {experiences.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <p className="mt-3 text-[24px]/[32px]">{experiences.duration}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Experience