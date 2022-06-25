import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import { Header } from './components/Header'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Personal } from './components/Personal'
import { Skills } from './components/Skills'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header/> */}
    {/* <div className="container"> */}
        <div className='personal-info'>
          <Personal/>
        </div>
        <div className='skills'>
          <Skills/>
        </div>
        <div className='experience'>
          <Experience/>
        </div>
        <div className='education'>
          <Education/>
        </div>
    {/* </div> */}

  </React.StrictMode>
);
