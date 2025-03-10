import React, { useEffect, useState } from "react";

import TextField from '@mui/material/TextField';
import { Button, ListItem } from "@mui/material";
import { CloudUploadRounded, EditNoteRounded } from "@mui/icons-material";
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { OutlinedInput } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { CloudUpload, Message } from '@mui/icons-material';
import ImagesUpdate from "../ProductImages/ImagesUpdate";
import supabase from "../../lib/helper/supabaseClient";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function ItemRow({ sku, name, price, stock }) {
    const [open, setOpen] = useState(false);
    const [initialImages, setInitialImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const urls = await getImages();
            setInitialImages(urls);
        };

        fetchImages();
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const getImages = async () => {
        const { data, error} = await supabase
            .from('simple_products')
            .select('image_1_name, image_2_name, image_3_name, image_4_name, image_5_name')
            .eq('item_sku', sku)
            .single()

        if (error) {
            alert('Error retrieving images names: ' + error.message)
            return [];
        }

        const imagesUrl = [
            data.image_1_name, data.image_2_name, data.image_3_name, data.image_4_name, data.image_5_name
        ]
            .filter(Boolean)
            .map((imageName) =>
                supabase.storage.from('ecommerce_gallery').getPublicUrl(`images/${imageName}`).data.publicUrl
            );

        return imagesUrl;
    };

    return (
        <div className="row">
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue={name} slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue={price} slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <TextField 
                id="outlined-read-only-input" hiddenLabel defaultValue={stock} slotProps={{
                    input: {
                    readOnly: true,
                    },
                }} variant="filled" size="small" fullWidth sx={{ '& .MuiFilledInput-root': {borderRadius: 0} }}
            />
            <React.Fragment>
                <IconButton onClick={handleClickOpen}>
                    <EditNoteRounded/>
                </IconButton>
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
                            Editar Producto
                            </Typography>
                            <Button variant='outlined' autoFocus color="inherit" onClick={handleClose} startIcon={<CloudUpload/>}>
                            Guardar
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem>
                            <TextField fullWidth label="SKU" id="sku-input" color='black' defaultValue={sku} />
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <TextField fullWidth label="Nombre del producto" id="product-name-input" color='black' defaultValue={name} />
                        </ListItem>
                        <ListItem>
                            <FormControl fullWidth sx={{ mr: 1 }} >
                                <InputLabel htmlFor="filled-adornment-amount">Precio</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Precio"
                                    defaultValue={price}
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ ml: 1 }} >
                                <InputLabel htmlFor="outlined-adornment-stock">Stock</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-stock"
                                    label="Stock"
                                    defaultValue={stock}
                                />
                            </FormControl>
                        </ListItem>
                        <ListItem sx={{ justifyContent: 'center'}}>
                            <ImagesUpdate imagesToLoad={initialImages}/>
                        </ListItem>
                    </List>
                </Dialog>
            </React.Fragment>
        </div>
    )
}

export default ItemRow