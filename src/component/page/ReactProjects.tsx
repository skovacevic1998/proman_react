import { Modal } from "antd";
import { useState } from "react";
import { SEPAModal } from "../util/SEPAModal";
import { Button } from "@mui/material";
import { PromanModal } from "../util/PromanModal";
import { CVModal } from "../util/CVModal";
import { TableSwitchModal } from "../util/TableSwitchModal";
import { NavbarModal } from "../util/NavbarModal";

interface ButtonProps {
  id: number;
  name: string;
  component: any;
}

const projectButtonList: ButtonProps[] = [
  {id: 1, name: "PROMAN", component: <PromanModal/>},
  {id: 2, name: "SEPA Standard", component: <SEPAModal/>},
  {id: 3, name: "CV", component: <CVModal/>}
]

const featuresButtonList: ButtonProps[] = [
  {id: 4, name: "Table switching with ant design", component: <TableSwitchModal/>},
  {id: 5, name: "Navigation bar", component: <NavbarModal/>},
]

export const ReactProjects: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>();

  const showModal = (component: any) => {
    setIsModalOpen(true);
    setModalContent(component);
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
            {projectButtonList.map((item)=>(
              <div key={item.id}>
                <Button variant="contained" onClick={() => showModal(item.component)}>
                  <h3>{item.name}</h3>
                </Button>
              </div>
            ))}
          </div>

          <div className="react_projects_content_right">
            <h2>FEATURES</h2>
            {featuresButtonList.map((item)=>(
              <div key={item.id}>
                <Button variant="contained" onClick={() => showModal(item.component)}>
                  <h3>{item.name}</h3>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <Modal title={modalContent?.props.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
          {modalContent}
        </Modal>
      </div>
    </>
  );
};