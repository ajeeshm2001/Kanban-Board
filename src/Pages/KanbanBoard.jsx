import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import Column from '../components/Columns/Column';
import { addTask, moveTask } from '../redux/reducers/taskReducer';
import AddTaskDialog from '../components/Dialog/AddTaskDialog';
import { TaskDetails } from '../components/Dialog/TaskDetails';
import SearchIcon from '@mui/icons-material/Search';
import constants from '../constants/constants';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  textFieldStyle: {
    marginBottom: 3,
    backgroundColor: 'white',
    borderRadius: '16px',
    '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
  },
  boxWidth: {
    width: '100%'
  }
})

const KanbanBoard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const columns = useSelector(state => state.columns);
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [taskDetails, setTaskDetails] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


  const handleClickOpen = (status) => {
    setNewTask(prev => ({ ...prev, status }));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewTask({ title: '', description: '' });
  };

  const handleAddTask = () => {
    dispatch(addTask({
      title: newTask.status,
      task: { id: Date.now(), title: newTask.title, description: newTask.description }
    }));
    setNewTask({ title: '', description: '' });
    handleClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prev => ({ ...prev, [name]: value }));
  };

  const handleDragStart = (e, taskId, columnTitle) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ taskId, columnTitle }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, destinationColumnTitle) => {
    e.preventDefault();
    const { taskId, columnTitle } = JSON.parse(e.dataTransfer.getData('text/plain'));

    if (columnTitle === destinationColumnTitle) return;

    dispatch(moveTask({
      sourceColumn: columnTitle,
      destinationColumn: destinationColumnTitle,
      taskId
    }));
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setTaskDetails(true);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredColumns = columns.map(column => ({
    ...column,
    tasks: column.tasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery)
    )
  }));


  return (
    <Box padding={2}>
      <Typography variant="h3" justifyContent="center" display="flex" gutterBottom>
        {constants.KANBAN_BOARD}
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center" className={classes.boxWidth}>
        <TextField
          size='small'
          className={classes.textFieldStyle}
          placeholder={constants.SEARCH_TASK_PLACEHOLDER}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ fontSize: 20, cursor: 'pointer' }} />
              </InputAdornment>
            )
          }}
          onChange={handleSearch}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" padding={2}>
        {filteredColumns.map((item) => (
          <Box
            key={item.title}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item.title)}
            sx={{ position: 'relative' }}
          >
            <Column
              title={item.title}
              tasks={item.tasks}
              statusColor={item.statusColor}
              onDragStart={(e, taskId) => handleDragStart(e, taskId, item.title)}
              handleClickOpen={() => handleClickOpen(item.title)}
              handleTaskClick={handleTaskClick}
            />
          </Box>
        ))}

        {/* Dialog for adding a new task */}
        <AddTaskDialog
          open={open}
          handleClose={handleClose}
          handleChange={handleChange}
          newTask={newTask}
          handleAddTask={handleAddTask}
        />

        {/* Dialog for Task Details */}
        <TaskDetails
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
      </Box>
    </Box>
  );
};

export default KanbanBoard;
