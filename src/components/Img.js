import React from 'react';
import Imagen from '../assets/img/programing.jpg';
import { TitleHero } from './TitleHero';

export const Img = () => {
    return (
        <div className="contHero">
            <img className="imgHero" src={Imagen}/>
            <TitleHero/>
        </div>
    )
}

