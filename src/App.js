import React from 'react';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchBar/SearchBar';
import InfoCards from './components/InfoCards/InfoCards';
const App = () => (
  <div>
    <NavBar />
    <SearchBar />
    <InfoCards />
    <hr />
    Reports
    <hr />
    Footer
  </div>
);

export default App;
