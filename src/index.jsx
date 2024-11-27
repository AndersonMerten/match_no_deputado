import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PrimeReactProvider } from 'primereact/api';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
      <PrimeReactProvider>
      <div className='app'>
        <App />
      </div>
      </PrimeReactProvider>
    </React.StrictMode>

);