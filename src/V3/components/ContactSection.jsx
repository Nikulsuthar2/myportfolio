import React from "react";
import { socialLinks } from "../data";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500  rounded-full opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-purple-500 rounded-full opacity-20 blur-[100px] animate-pulse delay-1000"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-center overflow-visible font-bold mt-4 md:mt-2 mb-12 md:mb-16">
              <span className="text-gray-100 dark:text-gray-900">📬</span>
              <span className="text-gradient ml-2">Let's Connect</span>
            </h2>
            <p className="text-gray-400 mb-4">
              I'm currently learning new things. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
          </div>
          <div className="project-card p-4 md:p-8 rounded-xl text-white  text-center">
            <h3 className="text-2xl font-semibold mb-6">Social Links</h3>
            <div className="flex flex-wrap justify-center gap-4 overflow-visible">
              <a
                key={"Mail"}
                href="mailto:nikulsuthar.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 card-gradient flex items-center gap-4 rounded-xl hover:scale-105 transition-transform"
                title={"Mail"}
              >
                <Mail size={20}  className="text-red-400"/>
                nikulsuthar.dev@gmail.com
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 card-gradient flex items-center gap-4  rounded-xl hover:scale-105 transition-transform"
                  title={link.name}
                >
                  {React.cloneElement(link.icon, {
                    className: link.color,
                  })}
                  {link.username}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;