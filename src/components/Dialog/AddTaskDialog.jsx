import React from 'react';
import { DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import { CustomDialog } from '../StyledDialog/CustomDialog';
import constants from '../../constants/constants';
import { useTheme } from '@mui/material/styles'


const AddTaskDialog = ({ open, handleClose, handleChange, newTask, handleAddTask }) => {
  const theme = useTheme()
  return (
    <CustomDialog open={open} onClose={handleClose}>
      <DialogTitle>{constants.ADD_A_NEW_TASK}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          value={newTask.title}
          onChange={handleChange}
          sx={{
            '& .MuiInputBase-root': {
              borderBottom: `1px solid ${theme.palette.secondary.main}`,
            },
            '& .MuiInputLabel-root': {
              color: theme.palette.secondary.main
            },
            '& .MuiInputLabel-shrink': {
              top: '-8px',
              left: 0,
              color: theme.palette.secondary.main
            },
            input: { color: theme.palette.secondary.main, borderBottom: `1px solid ${theme.palette.secondary.main}` }, label: { color: theme.palette.secondary.main }
          }}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          value={newTask.description}
          onChange={handleChange}
          sx={{
            '& .MuiInputBase-root': {
              borderBottom: `1px solid ${theme.palette.secondary.main}`,
            },
            '& .MuiInputLabel-root': {
              color: theme.palette.secondary.main
            },
            '& .MuiInputLabel-shrink': {
              top: '-8px',
              left: 0,
              color: theme.palette.secondary.main
            },
            input: { color: theme.palette.secondary.main }, label: { color: theme.palette.secondary.main }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{constants.CANCEL}</Button>
        <Button onClick={handleAddTask}>{constants.ADD}</Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default AddTaskDialog;
