import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
           <Header></Header>
       <About></About>
       <Resume></Resume>
       <Footer></Footer>
      </div>
    );
  }
}

export default App;
