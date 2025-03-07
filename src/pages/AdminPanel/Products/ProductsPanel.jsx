import React, { useEffect } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import ImageUpload from "../../../components/ImageUpload/ImageUpload";
import ItemRow from '../../../components/DashboardRows/ItemRow';
import ProductCreateDialog from './ProductCreateDialog';


function ProductsPanel({ userEmail }) {
    return (
        <>
            <p style={{ color: 'black' }}>Products Panel</p>
            <ItemRow />
            <ProductCreateDialog user={userEmail}/>
        </>
    )
}

export default ProductsPanel;