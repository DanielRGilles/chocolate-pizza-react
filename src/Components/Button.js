import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <img src={this.props.image.srcURL} alt={this.props.image.alt}/>
            
        )
    }
} 




