import { Image } from "antd";
import proman1 from "../../assets/proman1.jpg";

export const PromanModal: React.FC = () => {
  return (
    <>
      <div className="modal_main">
        <div style={{marginBottom: 10}}>
          <Image width={"auto"} src={proman1}/>
        </div>
        <div>
          <h3>Description:</h3>
        </div>
        <div>
          <p>This project represents a website that serves to manage the created projects.
            Based on Material UI and Ant Design UI libraries and connection to Spring API via Axios.</p>
        </div>
        <div>
          <h3>Availability:</h3>
        </div>
        <div>
          <p>GitHub: <a href="https://github.com/skovacevic1998/proman_react.git">https://github.com/skovacevic1998/proman_react.git</a></p>
        </div>
        <div>
          <h3>Last updated:</h3>
        </div>
        <div>
          <p>17.10.2023.</p>
        </div>
      </div>
    </>
  );
};
