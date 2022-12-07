import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-circular-progressbar/dist/styles.css';
import { DarkModeContextProvider } from './context/darkModeReducer';
import { AuthContextProvider } from './context/authState'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
    <App />
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
