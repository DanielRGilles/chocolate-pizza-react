import React, { Component } from 'react'
import IngredientItem from './IngredientItem'

export default class Ingredient extends Component {
    render() {
        return (
            <div><div></div>
                <div className="recipe">
                <ul>
                    <IngredientItem 
                    recipe={{
                        quantity: '1 1/2 cups',
                        ingredient: ' milk'
                    }}
                    />
                    <IngredientItem 
                    recipe={{
                        quantity: '1 1/2 cups',
                        ingredient: ' mascarpone'
                    }}
                    /><IngredientItem 
                    recipe={{
                        quantity: '1 1/2 tsp',
                        ingredient: ' pink salt'
                    }}
                    /><IngredientItem 
                    recipe={{
                        quantity: '1 lb',
                        ingredient: ' Black Mission Figs'
                    }}
                    /><IngredientItem 
                    recipe={{
                        quantity: '1/2 cup',
                        ingredient: 'brown sugar'
                    }}
                    /><IngredientItem 
                    recipe={{
                        quantity: '2-4 tbsp',
                        ingredient: ' water'
                    }}
                    />
                </ul>
                <ul>
                    <IngredientItem 
                    recipe={{
                        quantity: '1 1/2 cups',
                        ingredient: ' heavy cream'
                    }}
                    />
                    <IngredientItem 
                    recipe={{
                        quantity: '1/3 cups',
                        ingredient: ' granulated sugar'
                    }}
                    />
                    <IngredientItem 
                    recipe={{
                        quantity: '2',
                        ingredient: ' egg yolks'
                    }}
                    />
                    <IngredientItem 
                    recipe={{
                        quantity: '1 lemon',
                        ingredient: ' juiced'
                    }}
                    />
                    <IngredientItem 
                    recipe={{
                        quantity: '2 tbsp',
                        ingredient: ' butter'
                    }}
                    />
                    <IngredientItem 
                    recipe={{
                        quantity: '1 cup',
                        ingredient: ' honey roasted pecans, roughly chopped'
                    }}
                    />
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
