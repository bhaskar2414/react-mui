import  { useState, useEffect } from 'react';
import { Typography, Grid2,  CircularProgress,Box } from '@mui/material';
import axios from 'axios';
import ProductCard from './ProductCard';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating API call with a delay
        await new Promise(resolve => setTimeout(resolve, 500));
        const response = await axios.get('https://dummyjson.com/products?limit=10');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Box  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Our Products
      </Typography>
      <div >

      <Grid2 container spacing={3} flexItem orientation="vertical" variant="middle">
        {products.map(product => (
          <Grid2 item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
      </div>
      </>
  );
}

export default Products;