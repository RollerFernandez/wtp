import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';


export default class App extends Component {
  render(){
    return(
      <div>
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    )
  }
}