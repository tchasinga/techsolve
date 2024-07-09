import React from 'react';
import Oneimg from '../Image/pexels-fauxels-3184285.jpg';
import Navbars from './Navbars.jsx';
import CorporateSoftware from './CorporateSoftware';


export default function Honeypages() {
    return (
        <div id='home'  className="relative min-h-screen w-full max-w-full bg-fixed object-fill"
            style={{
                background: `linear-gradient(to right, rgba(4, 5, 5, 0.801), rgba(0, 0, 0, 0.112)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
            <Navbars />
            <CorporateSoftware />
        </div>
    );
}
