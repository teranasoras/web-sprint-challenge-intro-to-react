import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Personsection from './personsection';
import Dummydata from './dummydata'

const App = () => {
  const [Peopledata, setPeopledata] = useState(Dummydata);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setLoading(false)
        setPeopledata(res.data.results);
      })
      .catch(err => {
        setPeopledata(Dummydata)
        console.log('Failed to fetch api data')
      })
    }, []) 
  return (
    loading ?(<h1>Loading...</h1>):(
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Personsection persondata = {Peopledata}/>
    </div>)
  );
}

export default App;
