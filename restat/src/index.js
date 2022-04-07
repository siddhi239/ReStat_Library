import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './home1.css'
import home1 from './home1';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';

ReactDOM.render(
  <React.StrictMode>
    <div className="g-signin"> 
      <Login />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

