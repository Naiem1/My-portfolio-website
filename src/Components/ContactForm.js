import React from 'react';
import icon from '../icon/contact2.png'

const ContactForm = () => {
  return (
    <div id="contact" className="" style={{ padding: '100px', background: "#ddd", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h2 style={{color: '#000', marginBottom: '30px'}}>Get In Touch</h2>
      <div>
      
      <a style={{border: '1px solid #000', padding: '15px', display: 'flex', alignItems: 'center', fontSize: '18px', color: '#000'}} href="https://docs.google.com/forms/d/e/1FAIpQLScjetT8kkTjOV_GRipOetItZwj5K_drSPaxMg5aiDv1HrewBw/viewform?usp=sf_link"><img style={{width: '40px', verticalAlign: 'center'}} src={icon} alt="" />Contact me</a>
      </div>
    </div>
  );
};

export default ContactForm;