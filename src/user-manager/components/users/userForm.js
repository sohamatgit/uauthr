import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button/Button";
import { createUser } from "../../services/userApis";

export const UserForm = ()=> {

  const [formData, setFormData] = React.useState({
    firstname: '',
    lastname: '',
    email:''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const saveUser = () => {
    console.log("Creating User, calling API")
    createUser(formData);
  }  

  return (
    <Stack
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "50ch" },
        display: 'flex', 
        alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
        Create User Form
      <TextField id="firstname" label="Firstname" variant="outlined" value={formData.firstname} onChange={handleInputChange} />
      <TextField id="lastname" label="Lastname" variant="outlined" value={formData.lastname} onChange={handleInputChange}/>
      <TextField id="email" label="Email" variant="outlined" value={formData.email} onChange={handleInputChange}/>

      <Button variant="outlined" onClick={saveUser}>Save</Button>
    </Stack>
  );
}
