import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { Routes } from 'generouted/react-router';
import './index.css'

const App = () => {
  return (
    <Routes />
  );
};

const container = document.getElementById('root')!;
createRoot(container).render(<App />);
