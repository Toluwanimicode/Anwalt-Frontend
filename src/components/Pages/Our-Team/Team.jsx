import React from 'react'
import Footer from '../../Footer/Footer';
import NavigationBar from '../../Navbar/Navbar';

const Team = () => {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div>
        <div>
          <h2> Experts in criminal law</h2>
          <p> Professionals with exceptional legal background  and years of law espertise </p>
        </div>
        <div>
          <div>
            <img />
            <h3> Rebecca Stevens</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus unde doloremque voluptas. Pariatur natus iste atque. Assumenda dolores, quibusdam corporis ipsa ut maxime dolore labore magni fugit, nemo illo?</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <h3>Rewards we are proud of </h3>
        <p> impressive number of successful law cases in our portfolio is a confirmation of our quality </p>
        <div>
          <img />
          <img />
          <img />
          <img />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Team;