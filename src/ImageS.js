import React, { Component } from 'react'

export default class ImageS extends Component {
    render() {
        return (
            <div>
                 <section className="outer-container">
            <div className="sub-head">
                <div className="left-side">
                    <div className='art-title'>Chocolate Pizza</div>
                    <div className= "date">posted on 15 dec 2013 / desserts</div>
                </div>

                <div className="right-side">
                    <img className='printer' src="print-icon.png" alt='chocolate pizza'/>PRINT
                </div>
            </div>
            <div className="article"><img src='choco-pizza.png' alt="chocolate pizza"></img></div>
            </section>
            </div>
        )
    }
}
