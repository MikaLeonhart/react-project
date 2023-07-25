import './App.css';

import React, { useState, useEffect } from "react";
import Generate from './templates/Windows/Generate';

export default function App() {
    const [siteName, setSiteName] = useState('');
    const [showComponent, setShowComponent] = useState(true);

    const handleInputChange = (event) => {
        setSiteName(event.target.value);
    };

    const handleGenerateClick = () => {
        setShowComponent(false);
      
        console.log(siteName)
        console.log(showComponent)
    };


    return (
        <div>
            {showComponent && (
                <label>
                    <h3>Site Name:</h3>
                    <input type="text" value={siteName} onChange={handleInputChange} />
                </label>
            )}

            {showComponent && (
                <button onClick={handleGenerateClick}>Generate</button>
            )}

            {!showComponent && <Generate siteName={siteName} />}
        </div>
    );
}