import React, { useState } from 'react';
import Logo from '../images/logo.svg';
import Navbar from './Navbar';
import ReviewList from './ReviewList';

const Home = () => {
    const [data, setData] = useState([
        { title: "Assassin's Creed Valhalla", body: "qwerty", rating: "8", reviewedBy: "IGN", id: 1 },
        { title: "The Witcher 3: Wild Hunt", body: "qwerty", rating: "10", reviewedBy: "IGN", id: 2 },
        { title: "Rainbow Six Siege", body: "qwerty", rating: "9", reviewedBy: "IGN", id: 3 },
        { title: "Red Dead Redemption 2", body: "qwerty", rating: "8", reviewedBy: "IGN", id: 4 },
        { title: "Red Dead Redemption 2", body: "qwerty", rating: "8", reviewedBy: "IGN", id: 4 },
        { title: "Red Dead Redemption 2", body: "qwerty", rating: "8", reviewedBy: "IGN", id: 4 },
        { title: "Red Dead Redemption 2", body: "qwerty", rating: "8", reviewedBy: "IGN", id: 4 },
        { title: "Red Dead Redemption 2", body: "qwerty", rating: "8", reviewedBy: "IGN", id: 4 },
        { title: "Red Dead Redemption 2", body: "qwerty", rating: "8", reviewedBy: "IGN", id: 4 },
        { title: "Red Dead Redemption 2", body: "qwerty", rating: "8", reviewedBy: "IGN", id: 4 },
    ]);

    return (
        <div className="home">
            <header>
                <img src={Logo} alt="The Review" className="logo"/>
                <div className="btn-sign-in">sign in</div>
            <Navbar />
            </header>
            <ReviewList  data={data}/>
        </div>

    )
}

export default Home
