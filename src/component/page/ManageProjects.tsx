import {
  Box,
  Button as ButtonMui,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Button as ButtonAntd } from "antd";
import { ManageProjectsTable } from "../util/ManageProjectsTable";
import React from "react";
import { Checkbox, Input, Switch, Upload, UploadProps, message } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { AvailabilityTable } from "../util/AvailabilityTable";

const { TextArea } = Input;

const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log("Change:", e.target.value);
};

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ManageProjects: React.FC = () => {
  const [category, setCategory] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };
  const onChange = (checked: any) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <div className="react_projects_main">
        <div className="title">
          <h1>MANAGE PROJECTS</h1>
        </div>
        <div className="manage_projects_content">
          <div className="manage_projects_content_row">
            <div className="manage_projects_category_div">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="category_select_label">CATEGORY</InputLabel>
                  <Select
                    labelId="category_select_label"
                    id="category_select"
                    value={category}
                    label="Category"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>REACT</MenuItem>
                    <MenuItem value={20}>SPRING</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div>
              <TextField
                id="modal_name"
                label="PROECT NAME"
                variant="standard"
              />
            </div>
          </div>
          <div className="manage_projects_content_row">
            <div className="manage_projects_project_description">
              <InputLabel>PROJECT DESCRIPTION</InputLabel>
              <TextArea
                showCount
                onChange={onChange}
                placeholder="Enter project description..."
                style={{ height: 120, resize: "none" }}
              />
            </div>
          </div>
          <div className="manage_projects_content_row">
            <div className="manage_projects_content_upload_btn">
              <InputLabel>PROJECT IMAGE</InputLabel>
              <Upload {...props}>
                <ButtonMui startIcon={<UploadOutlined />} variant="contained">
                  SELECT IMAGE
                </ButtonMui>
              </Upload>
            </div>
          </div>

          <div className="manage_projects_availability_set">
            <div className="manage_projects_content_row">
              <TextField
                id="availability_name"
                label="AVAILABILITY NAME"
                variant="standard"
              />
            </div>
            <div className="manage_projects_content_row">
              <div className="manage_projects_availability_description">
                <InputLabel>AVAILABILITY DESCRIPTION</InputLabel>
                <TextArea
                  showCount
                  onChange={onChange}
                  placeholder="Enter availability description..."
                  style={{ height: 120, resize: "none" }}
                />
              </div>
            </div>
            <div className="manage_projects_content_row">
              <div className="manage_projects_availability_linkset">
                <InputLabel className="manage_projects_availability_label">
                  AVAILABILITY DESCRIPTION IS LINK
                </InputLabel>
                <Switch defaultChecked onChange={onChange} />
              </div>
            </div>
            <div className="manage_projects_content_row_button2">
              <ButtonAntd type="primary" shape="circle">
                <PlusOutlined />
              </ButtonAntd>
            </div>
            <div className="manage_projects_content_row">
              <AvailabilityTable/>
            </div>
          </div>
          <div className="manage_projects_content_row">
            <div className="manage_projects_status_div">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="status_select_label">
                    PROJECT STATUS
                  </InputLabel>
                  <Select
                    labelId="status_select_label"
                    id="status_select"
                    value={status}
                    label="PROJECT STATUS"
                    onChange={handleChangeStatus}
                  >
                    <MenuItem value={10}>ON DEVELOP</MenuItem>
                    <MenuItem value={20}>ON TEST</MenuItem>
                    <MenuItem value={10}>READY FOR DEPLOY</MenuItem>
                    <MenuItem value={40}>FINISHED</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="manage_projects_content_row_button1">
            <ButtonMui variant="contained">SAVE/ADD</ButtonMui>
          </div>
          <div>
            <ManageProjectsTable />
          </div>
        </div>
      </div>
    </>
  );
};
