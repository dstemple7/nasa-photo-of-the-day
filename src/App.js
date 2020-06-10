import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import {BASE_URL} from './constants'
import {NASA_KEY} from './constants/secrets'

function App() {
  const [nasaData, nasaResponse] = useState([])
  
  useEffect (() => {
    axios.get(`${BASE_URL}?api_key=${NASA_KEY}`)
      .then(res => {
        nasaResponse(res.data)
        })
      .catch(err => {
        debugger
        })
  }, [])
  
  return (
    <div className="App">
      <h6>{nasaData.date}</h6>
      <h1>{nasaData.title}</h1>
      <span role="img" aria-label='go!'>
        <img src={nasaData.url}></img>
      </span>
      <p>
        {nasaData.explanation}
        {nasaData.copyright}
      </p>
    </div>
  );
}

export default App;

