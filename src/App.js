import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import {BASE_URL} from './constants'
import {NASA_KEY} from './constants/secrets'
import DatePicker2 from './datepicker'

function App() {
  const [nasaData, nasaResponse] = useState([])

  //earlies data is 1995-06-16
  const currentDate = ''
  
  useEffect (() => {
    axios.get(`${BASE_URL}?api_key=${NASA_KEY}&date=${currentDate}`)
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
        <img src={nasaData.url} alt="NASA pic of the day"></img>
      </span>
      <p>
        <div>{nasaData.explanation}</div>
          <br></br>
        <div>{nasaData.copyright}</div>
      </p>
    </div>
  );
}

export default App;