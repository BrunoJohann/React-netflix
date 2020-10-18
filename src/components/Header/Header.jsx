import React, { useEffect, useState } from 'react';
import './Header.css';

export default () => {

    useEffect(() => {
        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    const [style, setStyle] = useState({
        background: 'transparent'
    });

    const scrollListener = () => {
        setStyle((prevState) => ({
            ...prevState,
            background: window.pageYOffset > 10 ? '#111' : 'transparent' 
        }));
    }

    return (
        <header style={style} >
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}