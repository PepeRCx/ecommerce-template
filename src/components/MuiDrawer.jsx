import { Drawer, Box, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react';

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 786);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 786);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return (
        <>
            {isMobile && (
                <IconButton
                    size='large'
                    color='inherit'
                    aria-label='logo'
                    onClick={() => setIsDrawerOpen(true)}   
                >
                    <MenuIcon />
                </IconButton>
            )}
            <Drawer
                anchor='right' 
                open={isDrawerOpen} 
                onClose={() => setIsDrawerOpen(false)} 
            >
                <Box p={2} 
                    width='250px' 
                    height='100vh'
                    textAlign='center' 
                    role='presentation'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignContent='center'
                    >
                    <Button variant="text" size='large' >Mujeres</Button>
                    <Button variant="text" size='large' >Hombres</Button>
                    <Button variant="text" size='large' >Niños</Button>
                </Box>
            </Drawer>
        </>
    )
}