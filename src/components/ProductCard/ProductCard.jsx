import './product-card.css'

function ProductCard({ title, image, price }) {
    return (
        <section>
            <article className='product-card'>
                <img src={image} className='card-image' alt='Imagen del producto' />
                <div className='item-info'>
                    <p className='item-title'>{title}</p>
                    <p className='item-price'>{price}</p>
                </div>
            </article>
        </section>
    )
}

export default ProductCard