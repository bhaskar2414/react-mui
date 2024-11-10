
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material';
import Home from './components/Home';
import Products from './components/Products';


function App() {
  return (
    <>
     <Router>
      <AppBar >
        <Toolbar className=''>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Our Store
          </Typography>
          <Link component={RouterLink} to="/" color="inherit" sx={{ mr: 2 }}>
            Home
          </Link>
          <Link component={RouterLink} to="/products" color="inherit">
            Products
          </Link>
        </Toolbar>
      </AppBar>
      <div style={ {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          } }>
        <div style={ {
            padding: '64px 94px',
          } }>

        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/products" element={<Products />} />
        </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
