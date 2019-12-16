import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//convert React Class --> React component
const AppComponent = <App/>;  

//pass component into regular DOM
ReactDOM.render(AppComponent,document.getElementById('app'));