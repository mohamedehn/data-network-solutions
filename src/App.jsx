import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Presentation/>
      <Intro/>
      <Footer/>
    </div>
  );
}

export default App;
