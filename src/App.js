import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
    <Weather defaultCity="Paris"/>
    

      <footer>
        This project was coded by {""}
        <a href="https://my-detailed-profile.onrender.com" target='_blank' rel="noopener noreferrer">Prezi Jessica
          </a>
        {""} and is {""}
        <a href="https://github.com/jessiebobra/weather-react-app" target='_blank' rel="noopener noreferrer">open-souurced on Github
        </a>
        {""} and {""}
         <a href="https://weather-react-app-sbr5.onrender.com" target='_blank' rel="noopener noreferrer">hosted on render
        </a>
        </footer>
        </div>
      </div>
  );
}

export default App;
