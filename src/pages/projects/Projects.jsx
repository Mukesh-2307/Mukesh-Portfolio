import React from 'react'
import { RiGitRepositoryFill } from "react-icons/ri";
import Footer from '../../components/Footer/Footer';

const projects = [
  {
    title: "AWS-Hosted Portfolio Website",
    location: "Bhubaneswar, Odisha",
    company: "Personal Project",
    description: [
      "Deployed a responsive personal portfolio using React.js on AWS (S3 for hosting, CloudFront for CDN, Route 53 for DNS).",
      "Configured AWS services to ensure high availability and security, demonstrating practical cloud knowledge.",
    ],
    tech: ["React.js", "AWS S3", "AWS CloudFront", "AWS Route 53"]
  },
  {
    title: "Google Maps Clone - Geolocation Routing Application",
    location: "Bhubaneswar, Odisha",
    company: "Personal Project",
    description: [
      "Developed an interactive web application using Python, JavaScript, Leaflet.js, and OSMnx, enabling 50+ users to calculate shortest paths with 90% accuracy.",
      "Applied data analysis to identify traffic bottlenecks, translating insights into actionable product improvements that enhanced customer experience.",
      "Demonstrated ability to learn new frameworks quickly and work with web mapping technologies.",
    ],
    tech: ["JavaScript", "Python", " Leaflet.js", "OSMnx Lib"]
  },
  {
    title: "iNoteBook - FullStack Notes Taking Application",
    location: "Bhubaneswar, Odisha",
    company: "Personal Project",
    description: [
      "Engineered a customer-focused multi-user web application using MERN stack (MongoDB, Express.js, React.js, Node.js) with HTML5, CSS3, and JavaScript, supporting 100+ concurrent user sessions.",
      "Implemented JWT-based authentication and Bcrypt password hashing following security best practices and SDLC standards; reduced average note retrieval time by 30% through optimized MongoDB queries.",
      "Translated user needs into detailed product requirements, designing intuitive UI/UX that improved usability and customer satisfaction.",
      "Conducted unit testing with Jest and followed agile development practices including peer code reviews and version control via Git."
    ],
    tech: ["React.js", "Express", "Node.js", "MongoDB", "JWT Auth", "BCrypt.js"]
  },
];

const Projects = () => {
  return (
    <>
      <div className='px-10 my-10 flex flex-col' id="projects">
        <div className='border-b-[0.5px] border-[var(--color-light-gray)] pb-6 relative'>
          <h1 className={`title`} style={{ color: `var(--color-green)` }}>Projects</h1>
          <p className=' text-[var(--color-dark-gray)]'>I’ve built impactful projects across automation, data pipelines, and IoT, showcasing my ability to deliver real-world tech solutions</p>
          <div className='size-24 bg-[var(--color-creame)] absolute right-[100px] -bottom-[50px] rounded-full flex justify-center items-center' style={{ color: `var(--color-green)` }}>
            <RiGitRepositoryFill className='size-12' />
          </div>
        </div>

        <div className="relative pt-10 mb-10">
          {/* Vertical Line */}
          <div className="absolute left-5 top-11 h-full border-l border-gray-700"></div>

          {/* Project Items */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="relative pl-12">

                {/* Circle Marker */}
                <div
                  className={`absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-gray-800 bg-[var(--color-green)] shadow-[0_0_10px_rgba(34,197,94,0.7)]`}
                ></div>

                {/* Project Details */}
                <h3 className='text-[40px]/[48px]'>
                  {project.title}
                </h3>
                <p className="text-[30px]/[38px]">{project.location}</p>
                <p className="text-gray-400 mb-3 text-[30px]/[38px]">{project.company}</p>

                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {project.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4 pl-6">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Projects