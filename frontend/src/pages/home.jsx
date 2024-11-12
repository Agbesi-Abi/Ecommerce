import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsLetterBox from '../components/NewsLetterBox';
import { fetchProducts } from '../api.jsx';
import { toast } from 'react-toastify';

const home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        toast.error('Failed to load products');
      }
    };
    getProducts();
  }, []);

  return (
    <div className='pt-16'>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
      <div>
        <h1>Home</h1>
        {/* Render products here if needed */}
      </div>
    </div>
  );
};

export default home;
