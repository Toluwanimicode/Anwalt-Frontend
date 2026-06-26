import React from 'react'
import NavigationBar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const Services = () => {
  return (
    <div id='services'>
        <div>
            <NavigationBar />
        </div>
        
        <div>
            <h3>Law Services</h3>
        </div>
        <div>
            <div>
                <a></a>
                <h4>
                    Best Law pratices
                </h4>
                <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.</p>
            </div>
            <div>
                <img />
                <h4>
                    Knowledge & practice
                </h4>
                <p>
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                </p>
            </div>
        </div>
        <div>
            <p>Special offer this month</p>
            <h4>20% discount</h4>
            <button>More</button>
        </div>
        <div>
            <Footer />
        </div>
    </div>
)
}

export default Services