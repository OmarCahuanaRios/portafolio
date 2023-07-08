import './App.css';
import NavBarComponent from './features/components/navbar/NavBar';
import ThemeToggle from '../src/features/shared/ToogleThemeIcon/ToogleIcon';
import React, {useState} from 'react';
import  { useEffect } from 'react';
import BodyComponent from './features/components/body/Body';
import HomeComponent from './features/components/home/Home'
function App() {

    const [language,setLanguage]=useState("spanish");
    const [classNav,setClassNav]=useState("lightNavLink")
    const [theme,setTheme]=useState(true);

    
    const changeData=()=>{
      setClassNav(classNav === "lightNavLink" ? "darkNavLink" : "lightNavLink");
    }
    
  return (
    <> 
    <div className='father'>
    <div >
    <NavBarComponent 
    navLinkClass={classNav}
    aboutText="About" 
    experienceText="Experience"
    skillsText="Skills"
    projectsText="Project"
    contactText="Contact"
    />
    </div>
    <div className='bodyComponent'>
    <BodyComponent/>
    </div>

    <div className='homeComponent'>
    <HomeComponent/>

    </div>

   
   
    </div>
    
  
  </>
   
  );
}

export default App;
