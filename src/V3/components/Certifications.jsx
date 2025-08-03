import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Github, ExternalLink, ArrowLeft, Youtube } from "lucide-react";
import { certificates } from "../data";

const Certifications = () => {
  const [isImageOpened, setIsImageOpened] = useState(false);
  const [imageOpened, setImageOpened] = useState(null);
  return (
    <div className="relative h-screen bg-[#0a0b0e] text-gray-100 overflow-hidden">
      {isImageOpened && (
        <div className="absolute z-50 h-screen w-screen flex justify-center items-center bg-[#000000b0] p-8" >
          <div className="rounded-xl border border-[1px] border-[#cacaca] bg-[#000000b0] h-fit md:h-full backdrop-blur-lg overflow-hidden">
            <button
              className="absolute right-2 top-2 p-2 bg-[#000000b0] h-8 flex justify-center items-center rounded-full hover:bg-black"
              onClick={(e) => setIsImageOpened(false)}
            >
              close
            </button>
            <img className="h-full" src={certificates[imageOpened].image} />
          </div>
        </div>
      )}
      <div className="h-full container mx-auto px-4 overflow-y-auto">
        <div className="sticky top-0  pt-6 pb-4 bg-[#0a0b0ecc] backdrop-blur-2xl z-10 border-b border-[#ffffff0d] flex flex-col md:flex-row items-center gap-8">
          <Link
            onClick={(e) => history.back()}
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className={`text-2xl font-bold text-yellow-400 text-center`}>
            Certifications
          </h1>
        </div>
        <div className="pt-4 md:pt-8 pb-8">
          <div className="space-y-4 overflow-scroll">
            {/* Screenshots */}
            <div className="project-card p-2 md:p-4 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificates.map((certificate, index) => (
                  <div>
                    <img
                      onClick={(e) => {
                        setImageOpened(index);
                        setIsImageOpened(true);
                      }}
                      src={certificate.image}
                      alt={certificate.name + (index + 1)}
                      className="aspect-video object-cover rounded-lg"
                    />
                    <div className="flex justify-between items-center mt-2 px-3">
                      <div>
                        <div className="text-lg font-semibold ">
                          {certificate.name}
                        </div>
                        <div className="text-sm text-gray-400 flex gap-2 items-center">
                          <span>{certificate.organization}</span>
                          <span> • </span>
                          <span>Issued {certificate.issueDate}</span>
                        </div>
                      </div>

                      {certificate.link && (
                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex h-fit items-center px-3 py-1 text-sm rounded-xl bg-yellow-500 bg-opacity-10 text-yellow-400 hover:bg-opacity-20 transition-colors`}
                        >
                          Link
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
