import React from 'react';
import Oneimg from '../Image/pexels-fauxels-3184285.jpg';

export default function Honeypages() {
    return (
        <div className="relative min-h-screen w-full max-w-full bg-fixed"
            style={{
                background: `linear-gradient(to right, rgba(4, 5, 5, 1.601), rgba(0, 0, 0, 0.112)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >
        </div>
    );
}
