import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>
            <div>
                <button className="footer-btn" type="button"><p>Request Early Access</p></button>
            </div>
            <div className="footer-links">
                <div className="footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Groove Street,<br/> All Rights Reserved</p>
                </div>
                <div className="footer-links_div">
                    <h4>Links</h4>
                    <p>About</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                </div>
                <div className="footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Groove Street</p>
                    <p>0120-834824</p>
                    <p>info@mail.com</p>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
        </>
    )
}

export default Footer
