import MiniCard from "./MiniCard";

const Products = () => {
    return (
        <div id='products'>
            <h2 className='text-brand-100 text-6xl text-center font-heading font-semibold px-8 mx-4 py-4 my-2'>
                Products
            </h2>
            <div className='flex flex-row w-full p-6 mx-10 justify-around'>
                <MiniCard />
            </div>
        </div>
    );
};

export default Products;
