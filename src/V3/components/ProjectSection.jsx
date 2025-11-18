import React from "react";
import { Github, ExternalLink, Youtube } from "lucide-react";
import { projects } from "../data";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 md:mt-2 overflow-visible mb-12 md:mb-16">
          <span className="text-gray-100 dark:text-gray-900">🚀</span>
          <span className="text-gradient ml-2">Featured Projects</span>
        </h2>
        <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-visible">
          {projects
            .slice()
            .reverse()
            .map((project) => (
              <div
                key={project.id}
                className="project-card rounded-xl overflow-hidden hover:scale-[1.02] transition-transform"
              >
                <Link to={`/projects/${project.id}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video w-full object-cover cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
                <div className="p-6 flex flex-col justify-between">
                  <Link to={`/projects/${project.id}`}
                    className={`text-xl font-semibold mb-2 text-${project.color}-400`}
                  >
                    {project.title}
                  </Link>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full bg-${project.color}-500 bg-opacity-10 text-${project.color}-400 text-xs`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className={`inline-flex items-center text-sm text-${project.color}-400 hover:text-${project.color}-300`}
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                    {project.demoUrl != "" ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className={`inline-flex items-center text-sm text-${project.color}-400 hover:text-${project.color}-300`}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                      </a>
                    ) : (
                      ""
                    )}
                    {project.youtubeUrl != "" ? (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        className={`inline-flex items-center text-sm text-${project.color}-400 hover:text-${project.color}-300`}
                      >
                        <Youtube className="w-4 h-4 mr-1" /> YouTube
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;