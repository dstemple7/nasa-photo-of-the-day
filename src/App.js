import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import {BASE_URL} from './constants'
import {NASA_KEY} from './constants/secrets'

const initialFormValues = {
  date: '',
}

function App() {
  const [nasaData, nasaResponse] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const onInputChange = evt => {
    const inputName = evt.target.name
    const inputValue = evt.target.value
    setFormValues({ ...formValues, [inputName]: inputValue })
  }
 
  useEffect (() => {
    axios.get(`${BASE_URL}?api_key=${NASA_KEY}&date=${initialFormValues.date}`)
      .then(res => {
        nasaResponse(res.data)
        })
      .catch(err => {
        debugger
        })
  }, [])
 
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div className="App">
      <div>
        <label>Change Date:&nbsp;
          <input name='date' value={formValues.date} onChange={onInputChange}/>
        </label>
        <button class="hidden" onClick={axios.get(`${BASE_URL}?api_key=${NASA_KEY}&date=${formValues.date}`) .then(res => { nasaResponse(res.data)}).catch(err => {debugger})}></button>
        <div class="ital">"Format: YYYY-MM-DD"</div>
      </div>
      <br></br>
      <h1>{nasaData.title}</h1>
      <h4><a href={nasaData.hdurl} target="blank">See HD!</a></h4>
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