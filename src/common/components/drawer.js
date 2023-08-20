import * as React from "react";
import Drawer from "@mui/material/Drawer";

export const MyDrawer = ({ state, toggleFunc, form }) => {
  return (
    <div>
      <Drawer anchor="right" open={state} onClose={toggleFunc}>
        <div>
            {form}
        </div>
      </Drawer>
    </div>
  );
};
