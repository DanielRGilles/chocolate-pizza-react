import React, { Component } from 'react'

export default class IngredientItem extends Component {
    render() {
        return (
            <li>  <input type="checkbox"/>{this.props.recipe.quantity}{this.props.recipe.ingredient}
            </li>
        )
    }
}
