import React, { useEffect, useState } from 'react'
import { Tabs } from '../../../common/components/tabs'
import { fetchUsers } from '../../services/userApis';
import { MyTable } from '../../../common/components/table';
import { useQuery } from "@tanstack/react-query";
import Button from '@mui/material/Button';
import { MyDrawer } from '../../../common/components/drawer';
import { deleteUser } from '../../services/userApis';
import Box from "@mui/material/Box";
import { MyDialog } from '../../../common/components/dialog';
import { UserForm } from './userForm';

export const UserPage = () => {


  return (
    <div>
      <Tabs /> 
    </div>
  );
}

export const UserTable = () => {

  const userFields = [
    { name: "email", header: "Email" },
    { name: "firstname", header: "Firstname" },
    { name: "lastname", header: "Lastname" }
  ];
  const [drawer, setDrawer] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleDialogOpen = () => {
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
  };

  const deleteUserChange = (id) => {
     console.log("Delete Button Called" + id)
     deleteUser(id)
  }

  const updateUserChange = (id) => {
    handleDialogOpen();
    const user = users.find((row) => row.userId === id);
    setUserData(user);
    console.log("Edit Button Called" + id);
  };

  const [users, setUsers] = useState([]);
  const { data, error, isLoading } = useQuery(['user-list'], () => fetchUsers());

  useEffect(() => {
    if(data){setUsers(data);}
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: Unable to Load Users</p>;
  }

  return (
    <div>
      <Box
        m={1} //margin
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Button variant="outlined" onClick={toggleDrawer}>
          Create User
        </Button>
      </Box>
      <MyDrawer state={drawer} toggleFunc={toggleDrawer} form = {<UserForm/>} />
      <MyDialog
        fields={userFields}
        dialogOpen={dialog}
        data={userData}
        handleDialogClose={handleDialogClose}
      />
      <MyTable
        fields={userFields}
        rows={users}
        id="userId"
        handleDelete={deleteUserChange}
        handleEdit={updateUserChange}
        sx={{ padding: 2 }}
      />
    </div>
  );
};
