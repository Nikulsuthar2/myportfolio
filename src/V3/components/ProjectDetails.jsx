import React from "react";
import { useParams, Link } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, Youtube } from "lucide-react";
import { projects } from "../data";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#0a0b0e] text-gray-100 overflow-hidden">
      <div className="h-full container mx-auto px-4 overflow-y-auto">
        <div className="sticky top-0  pt-6 pb-4 bg-[#0a0b0ecc] backdrop-blur-2xl z-10 border-b border-[#ffffff0d] flex flex-col md:flex-row items-center gap-8">
          <Link
            // to="/#projects"
            onClick={(e)=> history.back()}
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Projects
          </Link>
          <h1 className={`text-4xl font-bold text-${project.color}-400 text-center`}>
            {project.title}
          </h1>
        </div>
        <div className="max-w-8xl mt-2 mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4">
          <div className="flex flex-col gap-4 ">
            <img
              src={project.screenshots[0]}
              alt={project.title}
              className="w-full aspect-video object-cover rounded-xl"
            />
            {/* Project Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-xl bg-${project.color}-500 bg-opacity-10 text-${project.color}-400 hover:bg-opacity-20 transition-colors`}
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </a>
              {project.demoUrl && <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-xl bg-${project.color}-500 bg-opacity-10 text-${project.color}-400 hover:bg-opacity-20 transition-colors`}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>}
              {project.youtubeUrl && <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 rounded-xl bg-${project.color}-500 bg-opacity-10 text-${project.color}-400 hover:bg-opacity-20 transition-colors`}
              >
                <Youtube className="w-5 h-5 mr-2" />
                Youtube
              </a>}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            {/* Technologies Used */}
            <div className="project-card p-4 md:p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-lg bg-${project.color}-500 bg-opacity-10 text-${project.color}-400`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Key Features */}
            <div className="project-card p-4 md:p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-300 dark:text-gray-500"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-8 pb-8">
          <div className="space-y-4 overflow-scroll">
            {/* Project Description */}
            <div className="project-card p-4 md:p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className="text-gray-300 dark:text-gray-500">
                {project.longDescription}
              </p>
            </div>

            {/* Screenshots */}
            <div className="project-card p-4 md:p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <img
                    src={screenshot}
                    alt={project.title + (index + 1)}
                    className="aspect-video rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

// import React from 'react';
// import { X, Github, ExternalLink } from 'lucide-react';

// const ProjectDetails = ({ project, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-80 z-50 overflow-y-auto">
//       <div className="min-h-screen px-4 text-center">
//         <div className="fixed inset-0 z-0" onClick={onClose}></div>

//         <div className="inline-block w-full max-w-4xl my-8 text-left align-middle transition-all transform project-card rounded-xl relative z-10">
//           <button
//             onClick={onClose}
//             className="absolute right-4 top-4 text-gray-400 hover:text-white"
//           >
//             <X size={24} />
//           </button>

//           <div className="p-6">
//             <h2 className={`text-3xl font-bold mb-4 text-${project.color}-400`}>{project.title}</h2>

//             {/* Screenshots Carousel */}
//             <div className="mb-8 overflow-x-auto whitespace-nowrap">
//               <div className="flex space-x-4">
//                 {project.screenshots.map((screenshot, index) => (
//                   <img
//                     key={index}
//                     src={screenshot}
//                     alt={`${project.title} screenshot ${index + 1}`}
//                     className="w-full max-w-2xl h-64 object-cover rounded-lg"
//                   />
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-200">About the Project</h3>
//                 <p className="text-gray-400">{project.longDescription}</p>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-200">Key Features</h3>
//                 <ul className="list-disc list-inside text-gray-400">
//                   {project.features.map((feature, index) => (
//                     <li key={index}>{feature}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div>
//                 <h3 className="text-xl font-semibold mb-2 text-gray-200">Technologies Used</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className={`px-3 py-1 rounded-full bg-${project.color}-500 bg-opacity-10 text-${project.color}-400 text-sm`}
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex gap-4 pt-4">
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`inline-flex items-center px-4 py-2 rounded-lg bg-${project.color}-500 bg-opacity-10 text-${project.color}-400 hover:bg-opacity-20 transition-colors`}
//                 >
//                   <Github className="w-5 h-5 mr-2" />
//                   View Code
//                 </a>
//                 <a
//                   href={project.demoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`inline-flex items-center px-4 py-2 rounded-lg bg-${project.color}-500 bg-opacity-10 text-${project.color}-400 hover:bg-opacity-20 transition-colors`}
//                 >
//                   <ExternalLink className="w-5 h-5 mr-2" />
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
