import React, {useState} from 'react';
import '../navbar/NavBar.css'
import ThemeToggle from '../../shared/ToogleThemeIcon/ToogleIcon';




export default function NavBarComponent(props){
    const [active,setActive]=useState('navMenu');
    const [language,setLanguage]=useState("spanish");
    const [theme,setTheme]=useState(true);
    const navToogler=()=>{
        active==="navMenu"?setActive('navMenu navMenuActive'):setActive('navMenu')
    }

    const onClickToogler=()=>{
        console.log("temita",theme)
        setTheme(!theme)
    }

    return(
        <>
        <nav className='nav'>
            <a href="#" className='brand'>&lt;Omar/&gt;</a>
            <ul className={active} >
                <li><a href="#" className='navlink'>Home</a></li>
                <li><a href="#" className='navlink'>About</a></li>
                <li><a href="#" className='navlink'>Experience</a></li>
                <li><a href="#" className='navlink'>Skills</a></li>
                <li><a href="#" className='navlink'>Projects</a></li>
                <li><a href="#" className='navlink'>Contact</a></li>
            </ul>
           
            <div className='Buttons' onClick={onClickToogler}>
            <ThemeToggle />
            </div>
            <div onClick={navToogler} className='navToogler'>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav> 
        </>
        
    )
}