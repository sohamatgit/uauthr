import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { UserForm } from "../../user-manager/components/users/userForm";

export const MyDrawer = ({ state, toggleFunc }) => {
  return (
    <div>
      <Drawer anchor="right" open={state} onClose={toggleFunc}>
        <div>
            <UserForm/>
        </div>
      </Drawer>
    </div>
  );
};
