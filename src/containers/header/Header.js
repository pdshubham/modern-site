import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import AI from '../../assets/ai.png'

const Header = () => {
    return (
        <div>
            <div className="header section__padding" id="home">
                <div className="header-content">
                    <h1 className="gradient__text">Lets Build Something Amazing With Open AI</h1>
                    <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <div className="header-content__input">
                        <input type="email" placeholder="Enter your Email Address"/>
                        <button type="button">Get Started</button>
                    </div>
                    <div className="header-content__people">
                        <img src={people} alt="people" />
                        <p>1,600 people requested access in last 24 hours</p>
                    </div>
                </div>
                <div className="header-image">
                    <img src={AI} alt="AI" />
                </div>
            </div>
        </div>
    )
}

export default Header
