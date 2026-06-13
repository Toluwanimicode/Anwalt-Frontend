import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
    <div >
        <div className='footer-section' >
            <div className='FooterSection-1'>
                <div>
                    <h1>Law Office</h1>
                    <p>Lorem Ipsn gravida aliquet. Aenean solici, lorem quis biben auci elit ipsu sem nibh id elit Phasellus vive varius laet.Quisque rutrum.Aenean imperdiet. Etiam ultrices. Aenean solici, lorem quis biben auci.</p>
                </div>
                <div>
                    <div> {/*This particular div is for the icons*/}
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className='FooterSection-2'>
                <h3>Latest news</h3>
                <p>Stop worrying about the market  March 9, 2018</p>

                <p>Law school programs
                    March 9,2018
                </p>

                <p>How to deal with law school stress
                    March 9, 2018 
                </p>
            </div>
            <div className='FooterSection-3'>
                <h3>Usual questions</h3>
                <p>How can i protect myself ?
                    <br></br>
                    Can i divorce without a lawyer 
                    <br></br>
                    Do i need a personal lawyer
                    <br></br>
                    if hourly, what is the hourly fee ?
                    <br></br>
                    is there a cap on fees ?
                    <br></br>
                    Are you licensed in my country ?

                </p>
            </div>
            <div className='FooterSection-4'>
                <h3>Emergency Contact</h3>
                <form class="contact-form"  method="POST">
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Message" rows="6" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
            </div>
            <div className='footer-end'>
                <div>
                        <p>2026 DAT. All rights reserved</p>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    </div>
)
}

export default Footer