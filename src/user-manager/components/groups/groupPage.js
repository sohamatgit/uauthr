import React, { useEffect, useState } from "react";
import { Tabs } from "../../../common/components/tabs";
import { fetchGroups } from "../../services/groupApis";
import { MyTable } from "../../../common/components/table";
import { useQuery } from "@tanstack/react-query";
import Button from "@mui/material/Button";
import { MyDrawer } from "../../../common/components/drawer";
import { deleteGroup } from "../../services/groupApis";
import Box from "@mui/material/Box";
import { MyDialog } from "../../../common/components/dialog";
import { GroupForm } from "./groupForm";

export const GroupPage = () => {
  return (
    <div>
      <Tabs />
    </div>
  );
};

export const GroupTable = () => {
  const groupFields = [
    { name: "groupName", header: "Groupname" },
    { name: "description", header: "Description" },
  ];
  const [drawer, setDrawer] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [groupData, setGroupData] = React.useState({});

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleDialogOpen = () => {
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
  };

  const deleteGroupChange = (id) => {
    console.log("Delete Button Called" + id);
    deleteGroup(id);
  };

  const updateGroupChange = (id) => {
    handleDialogOpen();
    const group = groups.find((row) => row.groupId === id);
    setGroupData(group);
    console.log("Edit Button Called" + id);
  };

  const [groups, setGroups] = useState([]);
  const { data, error, isLoading } = useQuery(["group-list"], () =>
    fetchGroups()
  );

  useEffect(() => {
    if (data) {
      setGroups(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: Unable to Load Groups</p>;
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
          Create Group
        </Button>
      </Box>
      <MyDrawer state={drawer} toggleFunc={toggleDrawer} form={<GroupForm />} />
      <MyDialog
        fields={groupFields}
        dialogOpen={dialog}
        data={groupData}
        handleDialogClose={handleDialogClose}
      />
      <MyTable
        fields={groupFields}
        rows={groups}
        id="groupId"
        handleDelete={deleteGroupChange}
        handleEdit={updateGroupChange}
        sx={{ padding: 2 }}
      />
    </div>
  );
};
