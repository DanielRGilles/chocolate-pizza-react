import React, { Component } from 'react'
import Button from './Button.js'
export default class Header extends Component {
    render() {
        return (
            <div>
                 <div></div>
                
        <div>
        <header>
        <div className="top-left">
            <img src="logo.png" alt='logo' />
           <div className="title-head"> <div className="delicious">Delicious</div>
            <div className="best-food">the best food blog on the web.</div>
            </div>
        </div>
        <div></div>
         
        <nav>
        <Button 
                    image={ { 
                        srcURL: 'fb-icon.png', 
                        alt: 'icon' 
                    } }
                    />
         <Button 
                    image={ { 
                        srcURL: 'twit-icon.png', 
                        alt: 'twitter icon'
                    } }
                    />
            
         <Button 
                    image={ { 
                        srcURL: 'gp-icon.png', 
                        alt: 'google plus icon' 
                    } }
                    />
         <Button
            image={ { 
                        srcURL: 'insta-icon.png', 
                        alt: 'instagram icon' 
                    } }
                    />
        <Button
            image={ { 
                        srcURL: 'flic-icon.png', 
                        alt: 'flicker icon' 
                    } }
                    />
        <Button
            image={ { 
                        srcURL: 'pint-icon.png', 
                        alt: 'pinterest icon' 
                    } }
                    />
        <Button
            image={ { 
                        srcURL: 'rss-icon.png', 
                        alt: 'rss icon' 
                    } }
                    />
        <Button
            image={ { 
                        srcURL: 'mail-icon.png', 
                        alt: 'email icon' 
                    } }
                    />
        </nav>
       <div></div>
    </header>
    <hr></hr> 
            </div></div>
        )
    }
}
