import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Intro/>
    </div>
  );
}

export default App;
