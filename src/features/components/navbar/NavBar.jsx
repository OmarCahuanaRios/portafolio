import React, { useState } from 'react';
import '../navbar/NavBar.css';

export default function NavBarComponent(props) {
    const [active, setActive] = useState('navMenu');

    const navToogler = () => {
        setActive(active === 'navMenu' ? 'navMenu navMenuActive' : 'navMenu');
    };

    return (
        <>
            <nav className='nav'>
                <a href="#" className='brand'>&lt;Omar/&gt;</a>
                <ul className={active}>
                    <div className='hoversito'><li><a href="#" className={props.navLinkClass}>{props.aboutText}</a></li></div>
                    <div className='hoversito'><li><a href="#" className={props.navLinkClass}>{props.experienceText}</a></li></div>
                    <div className='hoversito'><li><a href="#" className={props.navLinkClass}>{props.skillsText}</a></li></div>
                    <div className='hoversito'><li><a href="#" className={props.navLinkClass}>{props.projectsText}</a></li></div>
                    <div className='hoversito'><li><a href="#" className={props.navLinkClass}>{props.contactText}</a></li></div>
                    
                </ul>
                <div onClick={navToogler} className='navToogler'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>
            </nav>
        </>
    );
}
