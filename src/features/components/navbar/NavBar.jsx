import React, {useState} from 'react';
import  { useEffect } from 'react';
import '../navbar/NavBar.css'





export default function NavBarComponent(props){
    const [active,setActive]=useState('navMenu');
    
    console.log("LLEGA",props.navLinkClass)
    const navToogler=()=>{
        setActive(active === 'navMenu' ? 'navMenu navMenuActive' : 'navMenu');
    }


    return(
        <>
        <nav className='nav'>

            <a href="#" className='brand'>&lt;Omar/&gt;</a>
            <ul className={active}>
                <li><a href="#" className={props.navLinkClass}>{props.aboutText}</a> </li>
                <li><a href="#" className={props.navLinkClass}>{props.experienceText}</a></li>
                <li><a href="#" className={props.navLinkClass}>{props.skillsText}</a></li>
                <li><a href="#" className={props.navLinkClass}>{props.projectsText}</a></li>
                <li><a href="#" className={props.navLinkClass}>{props.contactText}</a></li>
            </ul>
            <div onClick={navToogler} className='navToogler'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav> 
        </>
        
    )
}