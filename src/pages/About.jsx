import React from 'react';
import { Analytics } from '../components/Analytics';
import { NavLink } from "react-router-dom";


export const About =()=>{
    return <>
  <section className='section-hero'>
    <div className="container grid grid-two-cols">
      <div className="hero-image">
        <img src="./images/about.png" alt="about me" width={400} height={400}/>
      </div>
      <div className="about-content">
        <p>Welcome to Our World</p>
        <h1>Why Choose Us?</h1>
        <p><strong>Expertise: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas error velit ullam! Excepturi nesciunt a nulla autem praesentium laborum, e?</p>
        <p><strong>Customization: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas error velit ullam! Excepturi nesciunt a nulla autem praesentium laborum, sie?</p>
        <p><strong>Customer-Centric: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas error velit ullam! Excepturi nesciunt a nulla autem praesentium laborum, s</p>
        <p><strong>Affordibility: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas error velit ullam! Excepturi nesciunt a nulla autem praesentium laborum, sint, ?</p>
        <p><strong>Reliability: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas error velit ullam! Excepturi nesciunt a nulla autem praesentium laborum, ?</p>
      </div>
     </div>
    <div className="btn-btn-group">
         <NavLink to="/contact">
             <button className="btn">Connect Now</button>
         </NavLink>
         <NavLink to="/service">
             <button className="btn secondary-btn">Know More</button>
         </NavLink>
      </div>
    
      <Analytics/>
    
  </section>

</>
}
