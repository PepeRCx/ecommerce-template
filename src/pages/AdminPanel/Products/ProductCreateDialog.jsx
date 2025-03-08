import React, { useState, useRef } from 'react';
import supabase from '../../../lib/helper/supabaseClient'

import Button from '@mui/material/Button';
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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { ListItem, OutlinedInput } from '@mui/material';
import { CloudUpload, Message } from '@mui/icons-material';
import ImageUpload from '../../../components/ImageUpload/ImageUpload';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ProductCreateDialog({ user }) {
  const skuRef = useRef(null);
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const stockRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [skuForImages, setSkuForImages] = useState('')
  const [uploadSignal, setUploadSignal] = useState(false);

  const handleSaveButtonClick = () => {
    setUploadSignal((prev) => !prev);

    if (skuRef.current) {
      setSkuForImages(skuRef.current.value);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createItem = async () => {
    const sku = skuRef.current.value;
    const name = nameRef.current.value;
    const price = parseFloat(priceRef.current.value);
    const stock = parseInt(stockRef.current.value);
    const createdBy = user

    if (isNaN(price) || isNaN(stock)) {
      alert("Error: Precio o Stock no válidos");
      return;
    }

    const { error } = await supabase
      .from('simple_products')
      .insert({ item_sku: sku, item_name: name, item_price: price, item_stock: stock, created_by: createdBy });

    if (error) {
      alert("Ocurrió un error: " + Message.error);
    } else {
      alert("Producto creado correctamente");
    }

    handleSaveButtonClick();
    handleClose();
  }

  return (
    <React.Fragment>
      <Tooltip title='Crear Producto' placement='left'>
        <Fab color='primary' aria-label='add' sx={{ position: 'fixed', bottom: 64, right: 8 }} onClick={handleClickOpen} >
            <AddIcon />
        </Fab>
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
          <ListItem>
            <TextField fullWidth label="SKU" id="sku-input" color='black' inputRef={skuRef}/>
          </ListItem>
          <ListItem>
            <TextField fullWidth label="Nombre del producto" id="product-name-input" color='black' inputRef={nameRef}/>
          </ListItem>
          <ListItem>
            <FormControl fullWidth sx={{ mr: 1 }}>
              <InputLabel htmlFor="filled-adornment-amount">Precio</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                label="Precio"
                inputRef={priceRef}
              />
            </FormControl>
            <FormControl fullWidth sx={{ ml: 1 }}>
              <InputLabel htmlFor="outlined-adornment-stock">Stock</InputLabel>
              <OutlinedInput
                id="outlined-adornment-stock"
                startAdornment={<InputAdornment position="start"></InputAdornment>}
                label="Stock"
                inputRef={stockRef}
              />
            </FormControl>
          </ListItem>
          <ListItem sx={{ justifyContent: 'center'}} >
            <ImageUpload uploadPressed={uploadSignal} skuForImages={skuForImages} />
          </ListItem>
        </List>
      </Dialog>
    </React.Fragment>
  );
}
