import React, { useState, useEffect } from "react";
import HeaderComponents from '../Header/HeaderComponents';
import BodyComponents from '../Body/BodyComponents';
import FooterComponents from '../Footer/FooterComponents';

const GenerateNum = (min, max) => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        setRandomNumber(randomNum);
    };

    useEffect(() => {
        generateRandomNumber();
    }, []);


    return randomNumber
};


export default function Generate({ siteName }) {
    const randomNumHeader = GenerateNum(0, 4)
    const randomNumBody = GenerateNum(0, 4)
    const randomNumFooter = GenerateNum(0, 4)


    return (
        <React.Fragment >
            <HeaderComponents siteName={siteName.siteName} randomIndex={randomNumHeader} /> 
            <BodyComponents  randomIndex={randomNumBody} /> /
            <FooterComponents randomIndex={randomNumFooter} />
        </React.Fragment>
    )
}