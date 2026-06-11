import React from 'react'
import Footer from '../../Footer/Footer';
import NavigationBar from '../../Navbar/Navbar';
import "./Team.css"

const Team = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className='text-1'>
        <h3>Our Team</h3>
      </div>
      <div className='teamSection-1'> 
        <div>
          <h2> Experts in criminal law</h2>
          <p> Professionals with exceptional legal background  and years of law espertise </p>
        </div>
        <div className='team-section'>
          <div>
            <img src='./images/team-human1.jpg'/>
            <h3> Rebecca Stevens</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus unde doloremque voluptas. Pariatur natus iste atque. Assumenda dolores, quibusdam corporis ipsa ut maxime dolore labore magni fugit, nemo illo?</p>
          </div>
          <div>
            <img src='./images/team-human2.jpg' />
            <h3> Rebecca Stevens</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus unde doloremque voluptas. Pariatur natus iste atque. Assumenda dolores, quibusdam corporis ipsa ut maxime dolore labore magni fugit, nemo illo?</p>
          </div>
          <div>
            <img  src='./images/team-human3.jpg'/>
            <h3> Rebecca Stevens</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus unde doloremque voluptas. Pariatur natus iste atque. Assumenda dolores, quibusdam corporis ipsa ut maxime dolore labore magni fugit, nemo illo?</p>
          </div>
          <div>
            <img src='./images/team-human4.jpg' />
            <h3> Rebecca Stevens</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus unde doloremque voluptas. Pariatur natus iste atque. Assumenda dolores, quibusdam corporis ipsa ut maxime dolore labore magni fugit, nemo illo?</p>
          </div>
        </div>
      </div>
      <div>
        <div className='reward-section'>
            <h3>Rewards we are proud of </h3>
        <p> impressive number of successful law cases in our portfolio is a confirmation of our quality </p>
        </div>
        
        <div>
          <img src='./images/team-1.png' />
          <img  src='./images/Team-2.png'/>
          <img  src='./images/Team-3.png'/>
          <img  src='./images/Team-4.png'/>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Team;