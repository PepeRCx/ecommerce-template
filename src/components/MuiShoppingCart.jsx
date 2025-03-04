import * as React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { badgeClasses } from '@mui/material/Badge';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export const MuiShoppingCart = () => {
    return (
        <IconButton sx={{ color:'white' }} >
            <ShoppingCartIcon fontSize="small"/> 
            <CartBadge badgeContent={2} color='primary' overlap='circular' />
        </IconButton>
    );
}