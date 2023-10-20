import { Modal } from "antd";
import { useState } from "react";
import { Button } from "@mui/material";
import { GenericModal } from "../util/GenericModal";
import leftModalContent from "../../data/ProjectsModalLeftData.json";
import rightModalContent from "../../data/ProjectsModalRightData.json";
import React from "react";

interface availabilityListProps {
  name: string;
  description: string;
  isLink: boolean;
}

interface GenericModalProps {
  imagePath: string;
  description: string;
  availability: availabilityListProps[];
  updated: string;
}

interface ProjectItem {
  id: number;
  name: string;
  component: GenericModalProps;
}

export const ReactProjects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();

  const showModal = (component: GenericModalProps) => {
    setIsModalOpen(true);
    setModalContent(
      <GenericModal
        availability={component.availability}
        description={component.description}
        imagePath={component.imagePath}
        updated={component.updated}
      />
    );
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="react_projects_main">
        <div className="title">
          <h1>REACT PROJECTS</h1>
        </div>
        <div className="react_projects_content">
          <div className="react_projects_content_left">
            <h2>PROJECTS</h2>
            {leftModalContent.modalContent.map((item: ProjectItem) => (
              <div key={item.id}>
                <Button
                  variant="contained"
                  onClick={() => showModal(item.component)}
                >
                  <h3>{item.name}</h3>
                </Button>
              </div>
            ))}
          </div>

          <div className="react_projects_content_right">
            <h2>FEATURES</h2>
            {rightModalContent.modalContent.map((item: ProjectItem) => (
                <div key={item.id}>
                  <Button
                    variant="contained"
                    onClick={() => showModal(item.component)}
                  >
                    <h3>{item.name}</h3>
                  </Button>
                </div>
              ))}
          </div>
        </div>
        <Modal
          title={modalContent?.props.name}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          {modalContent}
        </Modal>
      </div>
    </>
  );
};
