import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


const reactRender = ReactDOM.createRoot(document.getElementById('root'))

let digits = [0, 0, 0, 0, 0, 0];

setInterval(() => {

  incrementDigits(); 

  reactRender.render(
    <React.StrictMode>
      <Home digits={digits} />
    </React.StrictMode>
  );

}, 1000);

function incrementDigits() {
  let index = 5; // último dígito

  while (index >= 0) {
    if (digits[index] < 9) {
      digits[index]++;
      break;            // no hay carry, salimos
    } else {
      digits[index] = 0; // reinicia y pasa el carry
      index--;
    }
  }
}





