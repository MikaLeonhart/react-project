import './App.css';

import React, { useState, useEffect } from "react";
//import { appWithTranslation } from 'next-translate';
import HeaderComponents from './templates/Header/HeaderComponents';
import BodyComponents from './templates/Body/BodyComponents';
import FooterComponents from './templates/Footer/FooterComponents';
import MainWindow from './templates/Windows/MainWindow';
import Generate from './templates/Windows/Generate';


//const GenerateNum = (min, max) => {
//    const [randomNumber, setRandomNumber] = useState(null);

//    const generateRandomNumber = () => {
//        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//        setRandomNumber(randomNum);
//    };

//    useEffect(() => {
//        generateRandomNumber();
//    }, []);


//    return randomNumber
//};


export default function App() {
    const [siteName, setSiteName] = useState('');
    const [showComponent, setShowComponent] = useState(false);

    //const randomNumHeader = GenerateNum(0, 4)
    //const randomNumBody = GenerateNum(0, 4)
    //const randomNumFooter = GenerateNum(0, 4)

    const handleInputChange = (event) => {
        setSiteName(event.target.value);
    };

    {/*const onGenerate = (siteName) => {
        return (
            <App siteName={siteName}></App>
        )
    }*/}

    const handleGenerateClick = () => {
        //onGenerate(siteName);
        setShowComponent(true);
      
        console.log(siteName)
        console.log(showComponent)
    };


    return (
        <div>
            <label>
                <h3>Site Name:</h3>
                <input type="text" value={siteName} onChange={handleInputChange} />
            </label>

            <button onClick={handleGenerateClick}>Generate</button>
            {showComponent && <Generate/>}
        </div>
    );

    {/*function Generate() {
        const parametrs = new Map(['siteName', {siteName}])
    }

    return (
        <div className="container">
            <h3>Site Name</h3>
            <input name="siteName" value={siteName} onChange={setsiteName()} />
            <button type="button" onClick={Generate()} />

        </div>
    );*/}
    //< App siteName={parametrs['siteName']}/>
}