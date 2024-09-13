import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    borderRadius: '16px !important',
    marginBottom: '16px',
    height: '165px',
    width: '317px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: 'black !important',
    cursor: 'pointer'
  },
  title: {
    color: 'lightblue',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '4px 8px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  description: {
    fontSize: '16px',
    padding: '8px',
    color: 'white',
    flexGrow: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    lineHeight: '1',
    height: '65px'
  },
});

const TaskCard = ({ task, statusColor, handleTaskClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={() => handleTaskClick(task)}>
      <CardContent>
        <Box
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: statusColor,
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          }}
        />
        <Box className={classes.title}>
          <Typography variant="body2">{task.title}</Typography>
        </Box>
        <Box className={classes.description}>
          <Typography variant="body1">{task.description}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
