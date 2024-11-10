import { Card, CardMedia, CardContent, Typography, CardActions, Button, IconButton } from '@mui/material';
import { AddShoppingCart, Favorite } from '@mui/icons-material';

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          variant="contained" 
          size="small"
        >
          Add to Cart
        </Button>
        <IconButton aria-label="add to wishlist" color="primary">
          <Favorite />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ProductCard;