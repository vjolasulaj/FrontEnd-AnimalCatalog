import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact container'>
            <div className='contact-container'>
                <div className="contacts">
                    <h2>Contact Us</h2>
                    <input type="text" name='name' placeholder='Your Name...' className='contact-input' required />
                    <input type="email" name='email' placeholder='Your Email...' className='contact-input' required />
                    <textarea name="message" placeholder='Your Message...' className='contact-input' ></textarea>
                    <button type='button'>Submit</button>
                </div>

                <div className="contact-info">
                    <p>Phone Number: <a href="#">+42 852745</a></p>
                    <p>Email Address: <a href="#">info@petexpo.com</a></p>
                </div>
            </div>

            <img src='./contact.png' alt="" />
        </div>
    )
}

export default Contact