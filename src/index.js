import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './Navbar';

const root = createRoot(document.getElementById('app'));

root.render(
    <App />
)