import style from "@styles/project.module.css";
import React, { useEffect } from "react";
import ImageGallery from "react-image-gallery";
import defaultProjects from "src/constant/project";
import Button from "./Button";
import ProjectModal from "./modal/ProjectModal";

export default function Projects() {
  const [projects, setProjects] = React.useState(defaultProjects);
  const [activeProject, setActiveProject] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  useEffect(() => {
    // Set projects[active].visited to true
    const newProjects = [...projects];
    newProjects[activeProject].visited = true;
    setProjects(newProjects);
  }, [activeProject]);

  const openSite = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="row w-full">
      <div
        className={`col w-4/5 md:w-[83%] lg:w-[87%] xl:w-11/12 bg-color-2 p-4 ${style.wrapper} shadow dark:shadow-neutral-700`}
      >
        <h3 className="text-2xl text-primary-2">
          {projects[activeProject].category}
        </h3>
        <h4 className="text-3xl text-color mt-2 sm:mt-4">
          {projects[activeProject].name}
        </h4>
        <p className="text-sm sm:text-base  text-color mt-1 sm:mt-2">
          {projects[activeProject].description}
        </p>
        <div className="row gap-8 mt-4 hidden xs:flex flex-1">
          <div className="col items-center">
            <h5 className="mb-2 text-primary-1 text-lg self-start">Stacks:</h5>
            <ul className="col gap-1">
              {projects[activeProject].stacks.map((stack, index) => (
                <li key={index} className="row items-center gap-2">
                  {stack.icon({})}
                  <span className="text-color">{stack.name}</span>
                </li>
              ))}
            </ul>
            {projects[activeProject].link && (
              <div className="w-full mt-4 flex justify-end">
                <Button
                  onClick={() => openSite(projects[activeProject].link ?? "")}
                >
                  Visit Website
                </Button>
              </div>
            )}
          </div>
          <div className="col max-w-[650px] mx-auto">
            <h5 className="mb-2 text-primary-1 text-lg">Galleries:</h5>
            <ImageGallery
              items={projects[activeProject].image.map((gallery) => ({
                original: gallery,
                thumbnail: gallery,
              }))}
              showNav={false}
              showThumbnails={false}
              showPlayButton={false}
              showBullets
              autoPlay
            />
          </div>
        </div>
        <div className="w-full xs:hidden mt-auto flex justify-end pt-8">
          <Button onClick={() => setOpenModal(true)}>See more!</Button>
        </div>
      </div>
      <div className="col w-1/5 lg:w-[13%] md:w-[17%] xl:w-1/12">
        {projects.map((project, index) => {
          if (activeProject === index) return null;
          return (
            <div
              key={index}
              className={`flex aspect-[5/3] justify-center items-center relative bg-color-2 dark:border-gray-800 border-gray-100 border cursor-pointer
              group`}
              onClick={() => setActiveProject(index)}
            >
              <h4 className="text-primary-3 group-hover:scale-110 duration-200">
                {project.name}
              </h4>
              {!project.visited && (
                <span className="absolute flex h-3 w-3 -top-1 -right-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                </span>
              )}
            </div>
          );
        })}
      </div>
      <ProjectModal
        onClose={() => setOpenModal(false)}
        open={openModal}
        project={projects[activeProject]}
      />
    </div>
  );
}
