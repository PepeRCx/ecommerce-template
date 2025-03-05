import React from "react";
import './new-products.css'
import ProductCard from "../ProductCard/ProductCard";

import NewProduct_01 from "../../assets/new-product-01.jpeg"
import NewProduct_02 from "../../assets/new-product-02.jpg"
import NewProduct_03 from "../../assets/new-product-03.jpg"

function NewProducts() {
    return (
        <section className="new-products-section">
            <h3>Nuevos Productos</h3>
            <div className="products-images">
                <ProductCard image={NewProduct_01} title={'Temporada 2025 ProMax'} price={'$1299.99'} />
                <ProductCard image={NewProduct_02} title={'Tennis Nike Edicion Especial'} price={'$1299.99'} />
                <ProductCard image={NewProduct_03} title={'Tennis Nike ProMax'} price={'$1299.99'} />
            </div>
        </section>
    )
}

export default NewProducts