import { Box, Typography } from '@mui/material'
import React from 'react'
import constants from '../../constants/constants'

export const NoData = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} mt={5}>
        <Typography>{constants.NO_TASKS}</Typography>
    </Box>
  )
}
