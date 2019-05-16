import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import InfoCards from './components/InfoCards/InfoCards';
import Reports from './components/Reports/Reports';
import About from './components/About/About';
const App = () => (
  <div>
    <NavBar />
    <SearchBar />
    <InfoCards />
    <Reports />
    <About />
    <hr />
    Footer
  </div>
);

export default App;
