import { Button, TextField } from "@mui/material";
import { ManageProjectsTable } from "../util/ManageProjectsTable";

export const ManageProjects: React.FC = () => {
  return (
    <>
      <div className="react_projects_main">
        <div className="title">
          <h1>MANAGE PROJECTS</h1>
        </div>
        <div className="manage_projects_content">
          <div>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
            />
          </div>
          <div>
            <Button variant="contained">Contained</Button>
          </div>
          <div>
            <ManageProjectsTable/>
          </div>
        </div>
      </div>
    </>
  );
};
