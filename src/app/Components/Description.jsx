import React from 'react'
import Oneimg from '../Image/pexels-thisisengineering-3861967.jpg';

export default function Description() {
    return (
        <div className="min-h-screen relative w-full max-w-full bg-fixed object-fill"
            style={{
                background: `linear-gradient(rgba(248, 248, 248, 0.926), rgba(248, 248, 248, 0.926)), url(${Oneimg.src}) center / cover no-repeat fixed`,
            }}
        >

        </div>
    )
}
