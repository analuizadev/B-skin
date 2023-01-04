import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import News from './components/pages/News';
import Shirt from './components/pages/Shirt';
import ShopPage from './components/pages/ShopPage';

import Providers from './components/services/Providers';
import Order from './components/services/Order';

import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/shirt" element={<Shirt />}></Route>
          <Route path="/shoppage" element={<ShopPage />}></Route>
          <Route path="/providers" element={<Providers />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
