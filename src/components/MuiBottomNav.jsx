import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper, createTheme, ThemeProvider } from "@mui/material";
import { BarChartRounded, PeopleAltRounded, SellRounded } from "@mui/icons-material";

function MuiBottomNav() {
    const [value, setValue] = React.useState(0);

    // Define a dark theme for the BottomNavigation component
    const darkTheme = createTheme({
        palette: {
            mode: 'dark', // Set the theme mode to dark
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
