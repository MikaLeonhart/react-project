import './App.css';

import React, { useState, useEffect } from "react";
import { appWithTranslation } from 'next-translate';
import HeaderComponents from './templates/Header/HeaderComponents';
import BodyComponents from './templates/Body/BodyComponents';
import FooterComponents from './templates/Footer/FooterComponents';


const GenerateNum = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const min = 0;
    const max = 4;

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(randomNum);
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);


    return randomNumber
};



const HomePage = () => {


    const randomNumHeader = GenerateNum()
    const randomNumBody = GenerateNum()
    const randomNumFooter = GenerateNum()

    console.log(randomNumHeader)
    console.log(randomNumBody)
    console.log(randomNumFooter)

    return (
        <div>
            <HeaderComponents randomIndex={randomNumHeader} />
            <BodyComponents randomIndex={randomNumBody} />
            <FooterComponents randomIndex={randomNumFooter} />
        </div>

       
    );
};

export default HomePage;






