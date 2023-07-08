import './App.css';

import React from 'react';
import RandomHeader from './templates/Header/RandomHeader';

const HomePage = () => {
    return (
        <div>
            <h1>My site</h1>
            <RandomHeader />
        </div>
    );
};

export default HomePage;

/*import React, { useState, useEffect } from "react";

const RandomNumberGenerator = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const min = 1; // Минимальное значение
    const max = 100; // Максимальное значение

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(randomNum);
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);

    return (
        <div>
            <button onClick={generateRandomNumber}>Generate</button>
            {randomNumber && <p>Random number: {randomNumber}</p>}
        </div>
    );
};

export default RandomNumberGenerator;*/



