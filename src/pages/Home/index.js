import React from 'react';
import './styles.css';
import ImgPerfil from '../../assets/perfil.jpg';

export default function Home() {
  return (
<>
<div className="parallax mx-auto bg-light">
    <div className=" mx-auto text-center">
      <img className="icon" src={ImgPerfil} alt="Augusto Mallmann"/>
    </div>
  </div>
  <div className="container">
    <div className="text-center  mw-20 ">
      <h1>Augusto Mallmann</h1>
      <h2>Frondend Developer</h2>
      <p>I currently work for PUCRS. </p>
      <p>I ♥ to develop things in React, JavaScript, Bootstrap and CSS.</p>
      <p>Always curious about learning new programming languages. </p> 
<br/>
<a className="btn" href="https://github.com/augustomallmann">Github</a><a href="https://www.linkedin.com/in/augusto-mallmann/" class="btn m-2">Linkedin</a>        
    </div>
  </div>
</>
  );
}
