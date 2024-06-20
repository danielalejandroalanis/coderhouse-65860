import React from 'react'
import ReactDOM from 'react-dom/client'

import { initializeApp } from "firebase/app";

import App from './App.jsx'
import './index.css'

const firebaseConfig = {
  apiKey: "AIzaSyBGmwteWIA1ySasqsc_3eISDqjh-9kqnKk",
  authDomain: "coderhouse-65860.firebaseapp.com",
  projectId: "coderhouse-65860",
  storageBucket: "coderhouse-65860.appspot.com",
  messagingSenderId: "581682820616",
  appId: "1:581682820616:web:59fa0cf7e5f6273bf403bd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
