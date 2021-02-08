import React from 'react';
import './App.css';
import Header from './headComponent/Header';
import Copy from './salesComponent/Copy';
import Brands from './brandComponent/Brands';
import CallToAction from './callToActionComponent/CallToAction';
import Footer from './Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <Copy />
      <Brands />
      <CallToAction />
      <Copy />
      <Footer />
    </div>
  );
}

export default App;
