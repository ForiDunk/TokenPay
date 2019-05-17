import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import InfoCards from './components/InfoCards/InfoCards';
import Reports from './components/Reports/Reports';
import About from './components/About/About';
const App = () => (
  <div>
    <NavBar />
    <SearchBar />
    <section className="main-body">
      <InfoCards />
      <Reports />
      <About />
    </section>
    <hr />
    Footer
  </div>
);

export default App;
