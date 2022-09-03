import React, { useState } from 'react'
import Navbar from '../../Components/Navigation/navbar.js'

import "../Enquiry/Enquiry.css";

export const Enquiry = () => {
  const [selected, setSelected] = useState('');

  const handleChange = event => {
    console.log(event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };

  return (
    <body className='enquirybody'>
      <Navbar />
      <div className='enquiryfirstcontainer'>
        <h1>Get in touch.</h1>
        <p className='enquiryfirstprg'>We're here to help and answer any question you might have. We will answer your inquiries in a maximum of 48 hours</p>
        <p className='enquirysecondprg'>hello@reallygreatsite.com</p>
        <p>+123-456-7890</p>
        <p>reallygreatsite.com</p>
        <p>123 Anywhere St, Any City, ST 12345</p>
      </div>

      <div className="enquirysecondcontainer">
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name*</span>
                <input type="text" required />
              </div>
              <div className="input-box">
                <span className="details">Last Name*</span>
                <input type="text" required />
              </div>
              <div className="input-box">
                <span className="details">Email*</span>
                <input type="text" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" required />
              </div>
              <div className="input-box">
                <span className="details">How did you find us?*</span>
                <select value={selected} onChange={handleChange}>
                  <option disabled={true} value="">Choose one</option>
                  <option value="facebook">Facebook</option>
                  <option value="youtube">Youtube</option>
                  <option value="twitter">Twitter</option>
                </select>
              </div>
              <div className="input-boxM">
                <span className="detailsM">Message*</span>
                <input type="text" placeholder="Write your message here..." required />
              </div>
            </div>
            <div className="button">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </body>

  )
}

export default Enquiry
