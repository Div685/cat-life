import React from 'react';
import CatLists from '../containers/CatLists';
import '../assets/Css/Cat.css';
import NavBar from './NavBar';

const App = () => (
  <div className="App">
    <NavBar />
    <CatLists />
  </div>
);

export default App;
