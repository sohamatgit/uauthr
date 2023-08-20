import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const MyDialog = ({ dialogOpen, fields, data ,handleDialogClose }) => {
  return (
    <div>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          {fields.map((field)=>(
          <TextField
            autoFocus
            margin="dense"
            id={field.name}
            label={field.header}
            value={data[field.name]}
            fullWidth
            variant="outlined"
          />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleDialogClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
