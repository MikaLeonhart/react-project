import React, { useState, useEffect } from "react";
import Header1 from './header1';
import Header2 from './header2';
import Header3 from './header3';

const RandomHeader = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const min = 1; // Минимальное значение
    const max = 3; // Максимальное значение

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(randomNum);
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);

    switch (randomNumber) {
        case 1:
            return <Header1 />;
        case 2:
            return <Header2 />;
        case 3:
            return <Header3 />;
        default:
            return null;
    }
};

export default RandomHeader;



