import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import InfoCards from './components/InfoCards/InfoCards';
import Reports from './components/Reports/Reports';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { isBrowser } from 'react-device-detect';
const App = () => (
  <div className={isBrowser ? 'desktop' : ''}>
    <NavBar />
    <SearchBar />
    <section className="main-body">
      <InfoCards />
      <Reports />
      <About />
    </section>
    <Footer />
  </div>
);

export default App;
