import axiosInstance from './axiosInstance.jsx';

export const fetchProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (productId) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const placeOrder = async (orderDetails) => {
  try {
    const response = await axiosInstance.post('/orders', orderDetails);
    return response.data;
  } catch (error) {
    console.error('Order placement failed:', error);
    throw error;
  }
};
