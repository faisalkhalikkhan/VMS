import React from 'react';
import './header.css';
import people from '../../assets/people.png';

const Header = () => {
    return (
        <div className="parking__header section__padding" id="home">
            <div className="parking__header-content">
                <h1 className="gradient__text">Find Your Parking Spot!</h1>
                <p>ParkLot is a platform where you can eliminate the frustration of searching for a parking spot and save time with our car parking spot system, providing easy access to avalable spots and increased security. </p>

                <div className="parking__header-content__input">
                    <input type="email" placeholder="Your Email Address" />
                    <button type="button">Find Parking</button>
                </div>

                <div className="parking__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            <div className="parking__header-image">
                <img src="" alt="parking" />
            </div>
        </div>
    );
};

export default Header;
