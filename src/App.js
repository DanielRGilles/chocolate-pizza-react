import React, { Component } from 'react'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import ImageS from './Components/ImageS.js'
import Ingredient from './Components/Ingredient.js'
import Recipe from './Components/Recipe.js'
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

