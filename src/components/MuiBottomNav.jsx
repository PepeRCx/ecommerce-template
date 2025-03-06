import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper, createTheme, ThemeProvider } from "@mui/material";
import { BarChartRounded, PeopleAltRounded, SellRounded } from "@mui/icons-material";

function MuiBottomNav({ onChange }) {
    const [value, setValue] = React.useState(0);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            onChange(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Dashboard" icon={<BarChartRounded />} />
                        <BottomNavigationAction label="Usuarios" icon={<PeopleAltRounded />} />
                        <BottomNavigationAction label="Productos" icon={<SellRounded fontSize="small" />} />
                    </BottomNavigation>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}

export default MuiBottomNav;
