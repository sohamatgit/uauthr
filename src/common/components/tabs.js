import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { UserTable } from "../../user-manager/components/users/userPage";
import { MyDrawer } from "./drawer";

export const Tabs = ()=> {
  const [value, setValue] = React.useState("users");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 2 }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Users" value="users" />
            <Tab label="Groups" value="groups" />
          </TabList>
        </Box>
        <TabPanel value="users">
          <UserTable />
        </TabPanel>
        <TabPanel value="groups">
          <MyDrawer />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
