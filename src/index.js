import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//class --> component
const AppComponent = App;
const AppJSX = <AppComponent/>;  

//inject component into html DOM using React Dom 
ReactDOM.render(AppJSX,document.getElementById('app'));