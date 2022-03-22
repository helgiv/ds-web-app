import React from 'react'
import './App.css';
import Form from './Form';

/* const express = require("express"); 

const app = express(); 
const cors = require('cors');
const corsOptions = {
  origin: 'https://dsmodeldeployment-hv.herokuapp.com',
  optionsSuccessStatus: 200
}; 

app.use(cors(corsOptions));
app.options('*', cors());
app.use('/', routes); */

function App() {

  return (
    <div className="App">
      <main className="App-main">
        <Form />
      </main>
    </div>
  );
}

export default App;
