import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const MyDialog = ({ dialogOpen, userData ,handleDialogClose }) => {
    const {firstname, lastname, email} = userData
  return (
    <div>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            value={email}
            type="email"
            fullWidth
            variant="outlined"
            disabled
          />
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            label="FirstName"
            value={firstname}
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="LastName"
            value={lastname}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
