import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Works from './components/Works';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Footer from './components/Footer';
import Activities from './components/Activities';
import Conseil from './components/Conseil';
import Engenieer from './components/Engenieer';
import Consulting from './components/Consulting';
import Distribution from './components/Distribution';
import Form from './components/Form';
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Presentation/>
      <Activities/>
      <Works/>
      <Conseil/>
      <Engenieer/>
      <Consulting/>
      <Distribution/>
      <Form/>
      <Footer/>
      <ScrollToTop/>
    </div>
  );
}

export default App;
