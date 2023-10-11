import React from 'react';
import Yo from '../body/Yo.png';
import './Home.css';

export default function HomeComponent(){
    return(
        <div class="imagen">
            <div>
            <img src={Yo} class="fotoperfil" alt="" />

            </div>
          
          <div className="descripcion">
            <p>¡Hola! Soy Omar. Ingeniero de Software, soy de Perú y tengo 25 años. Cuento con más de 2 años de experiencia enfocado al desarrollo Front. Entre mis pasatiempos tengo:</p>
            <ul>
                <li>Viajar</li>
                <li></li>
                <li>Escuchar música</li>
                <li></li>
                <li>Videojuegos</li>
                <li></li>
                <li>Series y películas</li>
                <li></li>
                <li>Caminar</li>
                <li></li>   
                <li>Pet Lover</li>
            </ul>
          </div>
        </div>
    )
}


