import React from 'react'
import  '../../Styles/Home.css'

function Footer() {
    return (
        <div className='footerWrapper' >
            <div className='firstAreaOfFooter' >
                <h3>About Us</h3>
                <p>Find the hashtags that can help you get a better visibility to your posts.</p>
            </div>
            <div className='secondAreaOfFooter' >
                <h3>Usefull Links</h3>
                <p>Hashtags Index</p>
                <p>New Hashtags</p>
                <p>Best Hashtags</p>
            </div>
            <div className='thirdAreaOfFooter' >
                <h3>Contact Us</h3>
                <p>example@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer

