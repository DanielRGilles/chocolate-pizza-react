import React, { Component } from 'react'

export default class ButtonItem extends Component {
    render() {
        return (
            <>
                <img src={this.props.image.srcURL} alt={this.props.image.alt}/>
            </>
        )
    }
}
