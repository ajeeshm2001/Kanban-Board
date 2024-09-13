import { createTheme } from '@mui/material';

export const theme = () => {
    const defaultTheme = {
        palette: {
            primary: {
                main: '#000000'
            },
            secondary: {
                main: '#ffffff'
            },
        }
    };
    const themes = createTheme(defaultTheme);
    return themes;
};
