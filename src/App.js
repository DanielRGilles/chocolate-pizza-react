import React, { Component } from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import ImageS from './ImageS.js'
import Ingredient from './Ingredient.js'
import Recipe from './Recipe.js'
import './App.css';
export default class App extends Component {
  render() {
    return (
      <main>
        <Header/>
        <ImageS/>
        <Recipe/>
        <Ingredient/>
        <Footer/>
        </main>
      
    )
  }
}

