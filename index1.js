import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let li_1 = React.createElement('li',{},"home")//<li>home</li>
let li_2 = React.createElement('li',{},"about")//<li>about</li>
let ul = React.createElement("ul",{},[li_1,li_2])
const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(ul);


 //const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
