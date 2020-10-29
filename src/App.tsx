import React from 'react';

import './App.css';

import Header from './components/Header/Header.component';
import Footer from './components/Footer/Footer.component';
import ListView from './containers/ListView/ListView.component';

function App() {
  return (
    <div className="App">
      <Header />
      <ListView />
      <Footer />
    </div> 
  );
}

export default App;
