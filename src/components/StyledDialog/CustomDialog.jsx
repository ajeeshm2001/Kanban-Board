import { Dialog } from '@mui/material';
import { styled } from '@mui/system';

export const CustomDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        backgroundColor: '#000', 
        color: '#fff',    
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2),
        width: "1000px"
    },
    '& .MuiTypography-root': {
        color: '#fff', 
    },
    '& .MuiButton-root': {
        color: '#fff',
    },
}));