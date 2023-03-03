import React, {Fragment, useState, useEffect} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './components/others/Theme';
import GlobalTheme from './components/others/Global';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import styles from './App.css'

import {BsSun} from 'react-icons/bs';
import {BsMoon} from 'react-icons/bs';

import Home from './components/pages/Home';
import News from './components/pages/News';
import Shirt from './components/pages/Shirt';
import ShopPage from './components/pages/ShopPage';
import Providers from './components/pages/Providers';
import ProviderDetails from './components/pages/ProviderDetails';
import Contact from './components/pages/Contact';
import Bag from './components/pages/Bag';
import EditProvide from './components/pages/EditProvide';
import ShirtDetails from './components/pages/ShirtDetails';


import NavBar from './components/layout/NavBar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';

function App() {

  const [theme, setTheme] = useState('light');
    
  const moon = document.getElementById('moon');
  const sun = document.getElementById('sun');

  const toggleDark = () => {

    if (theme === "light"){
      window.localStorage.setItem("theme", "dark");
      setTheme("dark")
      moon.classList.add('moon')
      sun.classList.remove('sun')
    }
  }

  const toggleLight = () => {
    if (theme === "dark"){
      window.localStorage.setItem("theme", "light");
      setTheme("light")
      sun.classList.add('sun')
      moon.classList.remove('moon')
    }
  };

  useEffect(() =>{
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, [])

  return (
    <Router>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Fragment>
          <GlobalTheme />
          <div id="theme">
            <button id="moon" onClick={toggleDark}><BsMoon /></button>
            <button id="sun" onClick={toggleLight}><BsSun /></button>
          </div>
          <NavBar />
          <Container customClass="min_height">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/shirt" element={<Shirt />}></Route>
              <Route path="/shoppage" element={<ShopPage />}></Route>
              <Route path="/providers" element={<Providers />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/bag" element={<Bag />}></Route>
              <Route path="t-shirts/details/:id" element={<ShirtDetails />}></Route>
              <Route path="providers/update/:id" element={<EditProvide />}></Route>
              <Route path="providers/details/:id" element={<ProviderDetails />}></Route>
            </Routes>
          </Container>
          <Footer />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
