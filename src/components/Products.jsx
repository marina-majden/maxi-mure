const Products = () => {
    return (
        <div id='products'>
            <h2 className='text-brand-100 text-6xl text-center font-heading font-semibold px-8 mx-4 py-4 my-2'>
                Products
            </h2>
            <div className='cards'>
                <div className='card'>
                    <img src='https://picsum.photos/id/1003/600/400' alt='' />
                    <h3>Product 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a href='#'>More</a>
                </div>
            </div>
        </div>
    );
};

export default Products;
