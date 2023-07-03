import './App.css';
import NavBarComponent from './features/components/navbar/NavBar';
import ThemeToggle from '../src/features/shared/ToogleThemeIcon/ToogleIcon';
import React, {useState} from 'react';
import  { useEffect } from 'react';

function App() {

    const [language,setLanguage]=useState("spanish");
    const [classNav,setClassNav]=useState("lightNavLink")
    const [theme,setTheme]=useState(true);

    
    const changeData=()=>{
      setClassNav(classNav === "lightNavLink" ? "darkNavLink" : "lightNavLink");
    }
    
  return (
    <div >
      <NavBarComponent 
      navLinkClass={classNav}
      aboutText="About" 
      experienceText="Experience"
      skillsText="Skills"
      projectsText="Project"
      contactText="Contact"
      />
      <div className='Buttons' onClick={changeData}>
            <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
