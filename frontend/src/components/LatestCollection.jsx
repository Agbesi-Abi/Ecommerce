import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // Ensure products is available before slicing
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);

    if (!latestProducts || latestProducts.length === 0) {
        return <p>No products available</p>;
    }

    return (
        <div className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title text1="LATEST" text2="COLLECTION" />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    This is a simple dummy text I am setting here. That's because I can't leave the page and paragraph empty.
                </p>
            </div>

            {/* Rendering Products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {latestProducts.map((item, index) => (
                    <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;