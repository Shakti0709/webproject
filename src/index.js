import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css"; 
import Header from './component.js/Header';
import Section_1 from './component.js/Section_1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <Section_1 />
  </>
);
