import React from 'react'
import { Button, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { CustomDialog } from '../StyledDialog/CustomDialog'
import constants from '../../constants/constants'

export const TaskDetails = ({setSelectedTask,selectedTask}) => {
  return (
    <CustomDialog open={!!selectedTask} onClose={() => setSelectedTask(null)}>
    <DialogTitle sx={{display: 'flex', justifyContent: 'center'}}>{constants.TASK_DETAILS}</DialogTitle>
    <DialogContent>
        {selectedTask && (
            <>
                <Typography variant="h6" mb={3}>{selectedTask.title}</Typography>
                <Typography variant="body1">{selectedTask.description}</Typography>
            </>
        )}
    </DialogContent>
    <DialogActions>
        <Button onClick={() => setSelectedTask(null)}>{constants.CLOSE}</Button>
    </DialogActions>
</CustomDialog>
  )
}
