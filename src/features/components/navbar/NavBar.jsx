import React from 'react';
import '../navbar/NavBar.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

export default function NavBarComponent(props){
    return(
        <>
        <nav className='nav'>
            <a href="#" className='brand'>&lt;Omar/&gt;</a>
            <ul className='navMenu'>
                <li><a href="#" className='navlink'>Home</a></li>
                <li><a href="#" className='navlink'>About</a></li>
                <li><a href="#" className='navlink'>Experience</a></li>
                <li><a href="#" className='navlink'>Skills</a></li>
                <li><a href="#" className='navlink'>Projects</a></li>
                <li><a href="#" className='navlink'>Contact</a></li>
            </ul>
            <BsFillMoonStarsFill/>
            <BsMoonStars/>
            <BsFillSunFill/>
            <BsSun/>
            <div className='navHamburguer'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav> 
        </>
        
    )
}