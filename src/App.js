import React from "react";
import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const getRandomAnimal = () => {
    const animals = ['bird', 'cat', 'cow', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

const App = () => {

    const [animals, setAnimal] = useState([]);

    const handleClick = () => {
        setAnimal([...animals, getRandomAnimal()]);
    }

    const renderList = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />;
    });

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">
                {renderList}
            </div>
        </div>
    )
}

export default App;