import React from 'react'
import Footer from '../../Footer/Footer'
import NavigationBar from '../../Navbar/Navbar'
import "./About.css"

const About = () => {
  return (
    <div>
      <div>
          <NavigationBar />
      </div>
      <div>
        <h2 className='text-1'>About Us</h2>
      </div>
      <div className='div-1'>
        <div className='div-2'>
          <h2>What we stand for</h2>
        </div>
        <div></div>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis heme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam quam nunc, sit amet orci blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Maecenas, sem quam semper libero, sit amet.
        </p>
        <div>
          <img className='image-1' src="./images/signature.png" />
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

export default About