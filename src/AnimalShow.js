import React from "react";
import { useState } from "react";
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';
import './AnimalShow.css';

const animalMap = {
    bird,
    cat,
    cow,
    gator,
    horse
}

const AnimalShow = ({ type }) => {

    const [click, setClick] = useState(0);

    const handleClick = () => {
        setClick(click + 1);
    }

    return (
        <div className="animal-show" onClick={handleClick}>
            <img className="animal" alt='animal' src={animalMap[type]} />
            <img className="heart" alt='heart' src={heart} style={{width : 10 + 10 * click+'px'}}/>
        </div>
    )
}

export default AnimalShow;