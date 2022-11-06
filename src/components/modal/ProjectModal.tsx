import Button from "@components/Button";
import React from "react";
import ReactDOM from "react-dom";
import ImageGallery from "react-image-gallery";
import Modal from "react-modal";
import { Project } from "src/constant/project";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  open: boolean;
  onClose: () => void;
  project: Project;
}

export default function ProjectModal({ open, onClose, project }: Props) {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={project.name + " Explanation"}
      overlayClassName="bg-black bg-opacity-50 fixed h-full w-full top-0 z-50"
      className={
        "bg-color-1 shadow absolute focus:outline-none rounded-md border"
      }
    >
      <div className="col gap-8 mt-4 flex p-4">
        <div className="col items-center">
          <h5 className="mb-2 text-primary-1 text-lg self-start">Stacks:</h5>
          <ul className="col gap-1">
            {project.stacks.map((stack, index) => (
              <li key={index} className="row items-center gap-2">
                {stack.icon({})}
                <span className="text-color">{stack.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col max-w-[650px] mx-auto">
          <h5 className="mb-2 text-primary-1 text-lg">Galleries:</h5>
          <ImageGallery
            items={project.image.map((gallery) => ({
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
    </Modal>
  );
}
