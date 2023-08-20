import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button/Button";
import { createGroup } from "../../services/groupApis";

export const GroupForm = () => {
  const [formData, setFormData] = React.useState({
    groupName: "",
    description: ""
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const saveGroup = () => {
    console.log("Creating Group, calling API");
    createGroup(formData);
  };

  return (
    <Stack
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
        display: "flex",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      Create Group Form
      <TextField
        id="groupName"
        label="GroupName"
        variant="outlined"
        value={formData.groupName}
        onChange={handleInputChange}
      />
      <TextField
        id="description"
        label="Description"
        variant="outlined"
        value={formData.description}
        onChange={handleInputChange}
      />
      <Button variant="outlined" onClick={saveGroup}>
        Save
      </Button>
    </Stack>
  );
};
