import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
    <Weather defaultCity="Nigeria"/>
    

      <footer>
        This project was coded by {""}
        <a href="" target='_blank' rel="noopener noreferrer">Prezi Jessica
          </a>
        {""}and is {""}
        <a href="" target='_blank' rel="noopener noreferrer">open-souurced on Github
        </a>
        {""}and{""}
         <a href="" target='_blank' rel="noopener noreferrer">hosted on render
        </a>
        </footer>
        </div>
      </div>
  );
}

export default App;
