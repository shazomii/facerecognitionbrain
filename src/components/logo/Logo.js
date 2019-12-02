import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
        <Tilt className="Tilt ml2 br2" options={{ max: 60 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"> <img style={{ paddingTop: '5px' }} src={brain} alt='brain' /> </div>
        </Tilt>
    )
}

export default Logo;
