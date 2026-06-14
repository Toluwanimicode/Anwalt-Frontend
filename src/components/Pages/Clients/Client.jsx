import React from 'react'
import Footer from '../../Footer/Footer'
import NavigationBar from '../../Navbar/Navbar'
import "./Client.css"

const Client = () => {
    return (
    <div id="" >
        <div>
            <NavigationBar />
        </div>
        <div>
            <h2 className='client-text' >Our Clients</h2>
        </div>
        <div>
            <div>
                <div>
                    <div>

                    </div>
                    <div>
                        <p>With a great team of law expertise we strive for excellence in court. Beside impressive background, our lawyers have a long experience in all sorts of legal cases </p>
                    </div>
                </div>
                
            </div>
            <div>

            </div>
        </div>
        <div className='number-section'>
            <div>
                <h3>117</h3>
                <p>Donec sapien ut libero venenatis faucibus . Nullam qante sit </p>
            </div>
            <div>
                <h3>62</h3>
                <p>Donec sapien ut libero venenatis faucibus . Nullam qante sit  </p>
            </div>
            <div>
                <h3>18</h3>
                <p>Donec sapien ut libero venenatis faucibus . Nullam qante sit </p>
            </div>
            <div>
                <h3>93 </h3>
                <p> Donec sapien ut libero venenatis faucibus . Nullam qante sit </p>
            </div>
        </div>
        <div>
            <h3 className='client-section1'>List of our satisfied CLients</h3>
            <p className='client-section1a'>impressive number of successful law cases in our portfolio is a confirmation of our quality . Check out the list of our clients and become one of them</p>
            <div className='image-section' >
                <div>
                    <img src='./images/client-1.png' />
                </div>
                <div>
                    <img src='./images/client-2.png' />
                </div>
                <div>
                    <img src='./images/client-3.png' />
                </div>
                <div>
                    <img src='./images/client-4.png' />
                </div>
            </div>
        </div>
        <div>
            
        </div>
        <div>
            <Footer />
        </div>
    </div>
)
}

export default Client