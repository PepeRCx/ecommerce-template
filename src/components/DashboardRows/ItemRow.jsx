import React, { useState } from "react";

import TextField from '@mui/material/TextField';
import { Button, IconButton } from "@mui/material";
import { CloudUploadRounded, EditNoteRounded } from "@mui/icons-material";
import Dialog from '@mui/material/Dialog';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { OutlinedInput } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

function DashboardRow() {
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
      
    const [open, setOpen] = useState(false);
      
    const handleClickOpen = () => {
        setOpen(true);
    };
      
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="row">
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue='Nombre del producto' slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue='Precio' slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue='Stock' slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <React.Fragment>
                <Tooltip title='Crear Producto' placement='left'>
                    <IconButton onClick={handleClickOpen}>
                        <EditNoteRounded/>
                    </IconButton>
                </Tooltip>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative', backgroundColor: 'black' }}>
                    <Toolbar>
                        <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        >
                        <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Nuevo Producto
                        </Typography>
                        <Button variant='outlined' autoFocus color="inherit" onClick={createItem} startIcon={<CloudUpload/>}>
                        Guardar
                        </Button>
                    </Toolbar>
                    </AppBar>
                    <List>
                    <ListItemButton>
                        <TextField fullWidth label="SKU" id="sku-input" color='black' />
                    </ListItemButton>
                    <ListItemButton>
                        <TextField fullWidth label="Nombre del producto" id="product-name-input" color='black'/>
                    </ListItemButton>
                    <ListItemButton>
                        <FormControl fullWidth sx={{ mr: 1 }}>
                        <InputLabel htmlFor="filled-adornment-amount">Precio</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Precio"
                        />
                        </FormControl>
                        <FormControl fullWidth sx={{ ml: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-stock">Stock</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-stock"
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            label="Stock"
                        />
                        </FormControl>
                    </ListItemButton>
                    </List>
                </Dialog>
            </React.Fragment>
        </div>
    )
}

export default DashboardRow