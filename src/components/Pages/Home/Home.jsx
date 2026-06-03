import React from 'react'
import "./Home.css"
import Caorousel1 from '../../Carousel/Carousel'
import NavigationBar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const Home = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <Caorousel1 />
      </div>
      <div className='section-1'>
        <div>
          <img />
          <h3>Employment law</h3>
          <p>Know your rights. We'll take care about the rest </p>
        </div>
        <div>
          <img />
          <h3>Domestic Violence</h3>
          <p>Don't be scared to step out. Contact our law team</p>
        </div>
        <div>
          <img />
          <h3>Securities law</h3>
          <p>A security is an investment in a business . Make the 1st step</p>
        </div>
        <div>
          <img />
          <h3>Federal crimes</h3>
          <p>Meet the best experts in the federal crimes field</p>
        </div>
      </div>
      <div className='section-2'>
        <h3>Emergency?Call us now  +35 123 456 789 </h3>
      </div>
      <div className='body-2'>
        <div className='body-3'>
          <h3>We're there for you</h3>
          <p>With 25 years of experience in law and justice, our team is focused on delivering quality and value to our clients. We achieve this through practical and innovative legal solutions that help our clients . Everyone deserves support on the way to Justice </p>
          <img src='./images/signature.png' />
        </div>
        <div>
          <img src='./images/h1-img-1.jpg'  />
        </div>
      </div>
      <div className='ctr-1'>
        <div >
          <h3>Step closer to justice</h3>
          <p>Best law practices. Expertise in various law fields . Great results</p>
        </div>
        <div className='section-3'>
          <div>
            <img />
            <h3>Best law practices</h3>
            <p>Lorem ipsum dolor sit amet, consecteur adi piscing sed do eiusmod tempor icididu</p>
          </div>
          <div>
            <img />
            <h3>Efficiency & Trust </h3>
            <p>Lorem ipsum dolor sit amet, consecteur adi piscing sed do eiusmod tempor icididu</p>
          </div>
          <div>
            <h3>Results you deserve </h3>
            <p>Lorem ipsum dolor sit amet, consecteur adi piscing sed do eiusmod tempor icididu  </p>
          </div>
        </div>
        <div>
          <div>
            <h3>117</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div>
            <h3>62</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home