import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../services/fetch_news';

const HomeScreenLogic = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);

  const fetchData = async () => {
    try {
       dispatch(fetchProducts());
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    products,
    fetchData,
  };
};

export default HomeScreenLogic;
