import { Link as RouterLink } from 'react-router-dom';
import { Typography, Button,  Container, Box } from '@mui/material';

function Home() {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to our <span style={{ color: 'primary.main' }}>Store</span>
      </Typography>
      <Typography variant="h5" gutterBottom>
        Check out our amazing products!
      </Typography>
      <Button
        component={RouterLink}
        to="/products"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 4 }}
      >
        View Products
      </Button>
        </div>
  );
}

export default Home;