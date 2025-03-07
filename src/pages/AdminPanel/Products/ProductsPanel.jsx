import React, { useEffect, useState } from "react";
import supabase from "../../../lib/helper/supabaseClient";

import ItemRow from '../../../components/DashboardRows/ItemRow';
import ProductCreateDialog from './ProductCreateDialog';


function ProductsPanel({ userEmail }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from('simple_products')
            .select('item_name, item_price, item_stock')
        
        if (error) {
            console.log(error)
        } else {
            setProducts(data)
            console.log(data)
        }
    }

    return (
        <>
            <p style={{ color: 'black' }}>Products Panel</p>
            {products.map((product, index) =>(
                <ItemRow key={index} name={product.item_name} price={product.item_price} stock={product.item_stock} />
            ))}
            <ProductCreateDialog user={userEmail}/>
        </>
    )
}

export default ProductsPanel;