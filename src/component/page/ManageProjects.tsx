import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { ManageProjectsTable } from "../util/ManageProjectsTable";
import React from "react";
import { Checkbox, Input, Upload, UploadProps, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ManageProjects: React.FC = () => {
  const [category, setCategory] = React.useState("");
  const [status, setStatus] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <>
      <div className="react_projects_main">
        <div className="title">
          <h1>MANAGE PROJECTS</h1>
        </div>
        <div className="manage_projects_content">
          <div>
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
            <TextField id="modal_name" label="PROECT NAME" variant="standard" />
            <InputLabel>PROJECT DESCRIPTION</InputLabel>
            <TextArea
              showCount
              onChange={onChange}
              placeholder="Enter project description..."
              style={{ height: 120, resize: "none" }}
            />
          </div>
          <div>
            <Upload {...props}>
              <Button startIcon={<UploadOutlined />}>Image path</Button>
            </Upload>

            <TextField
              id="availability_name"
              label="AVAILABILITY NAME"
              variant="standard"
            />
          </div>
          <div>
          <InputLabel>AVAILABILITY DESCRIPTION</InputLabel>
            <TextArea
              showCount
              onChange={onChange}
              placeholder="Enter availability description..."
              style={{ height: 120, resize: "none" }}
            />
          </div>
          <div>
          <InputLabel>AVAILABILITY DESCRIPTION IS LINK</InputLabel>
          <Checkbox {...label} defaultChecked />
          <Checkbox {...label} defaultChecked/>
          </div>
          <div>
          <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="status_select_label">PROJECT STATUS</InputLabel>
                <Select
                  labelId="status_select_label"
                  id="status_select"
                  value={status}
                  label="PROJECT STATUS"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value={10}>ACTIVE</MenuItem>
                  <MenuItem value={20}>INACTIVE</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <Button variant="contained">Contained</Button>
          </div>
          <div>
            <ManageProjectsTable />
          </div>
        </div>
      </div>
    </>
  );
};
