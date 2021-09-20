import React, { Component } from 'react'

export default class Ingredient extends Component {
    render() {
        return (
            <div><div></div>
                <div className="recipe">
                <ul>
                    <li><input type="checkbox"/>1 1/2 cups milk</li>
                    <li><input type="checkbox"/>1/2 cup mascarpone</li>
                    <li><input type="checkbox"/>1/2 tsp pink salt</li>
                    <li><input type="checkbox"/>1 lb Black Mission Figs</li>
                    <li><input type="checkbox"/>1/2 cup brown sugar</li>
                    <li><input type="checkbox"/>2-4 tbsp water</li>
                </ul>
                <ul>
                    <li><input type="checkbox"/>1 1/2 cups heavy cream</li>
                    <li><input type="checkbox"/>1/3 granulated sugar</li>
                    <li><input type="checkbox"/>2 egg yolks</li>
                    <li><input type="checkbox"/>1 lemon, juiced</li>
                    <li><input type="checkbox"/>2 tbsp butter</li>
                    <li><input type="checkbox"/>1 cup honey roasted pecans, roughly chopped</li>
                </ul>

            </div>
           
            <div></div>
            <div></div>
            <div className="author">
                <div><img src="van-pic.png" alt='author'/></div>
                <div>
                    <h5>Vanessa Stevenson</h5>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
                <div><button className="share">share recipe</button></div>
            </div>
            </div>
        )
    }
}
