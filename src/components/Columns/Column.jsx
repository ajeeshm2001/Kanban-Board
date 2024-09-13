import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import TaskCard from '../Card/TaskCard';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import { NoData } from '../NoData/NoData';
import constants from '../../constants/constants';


const Column = ({ title, tasks, statusColor, onDragStart, handleClickOpen, handleTaskClick }) => {
  const theme = useTheme()

  return (
    <Box sx={{ flex: 1, marginX: 1, minWidth: 300 }}>
      <Box display='flex' alignItems='center' mb={2}>
        <Box width={30} height={30} display='flex' alignItems='center' justifyContent='center' color={theme.palette.secondary.main} mr={2}
          sx={{
            borderRadius: '50%',
            backgroundColor: statusColor,
            fontWeight: 'bold',
            fontSize: '14px'
          }}
        >
          <Typography variant="body2">{tasks.length}</Typography>
        </Box>
        <Typography
          variant="h6"
          align="center"
          sx={{
            height: 30,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {title}
        </Typography>
        {title === constants.TODO && (
          <Tooltip title={constants.ADD_A_NEW_TASK}>
            <IconButton
              onClick={() => handleClickOpen(title)}
              sx={{ ml: 'auto', color: theme.palette.secondary.main }}
            >
              <AddIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
      {tasks.length === 0 ?
        <NoData /> :
        tasks.map((task) => (
          <Box
            key={task.id}
            draggable
            onDragStart={(e) => onDragStart(e, task.id)}
          >
            <TaskCard task={task} statusColor={statusColor} handleTaskClick={handleTaskClick} />
          </Box>
        ))}
    </Box>
  );
};

export default Column;
