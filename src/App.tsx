import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    let localValue = localStorage.getItem('counter')
    console.log({ localValue })
    if (localValue) {
      let newVal = JSON.parse(localValue)
      setValue(newVal)
    }
  }, [])



  useEffect(() => {
    console.log({ value })
    localStorage.setItem('counter', JSON.stringify(value))
  }, [value])




  const incHandler = () => {
    setValue(value + 1)
  }
  // const setLocalStorageHandler = () => {
  //   localStorage.setItem('couner', JSON.stringify(value))
  // }

  // const getFromLocalStorageHandler = () => {
  // let valueLocal =  localStorage.getItem('couner')
  // if(valueLocal) {
  //   let changedValue = JSON.parse(valueLocal)
  //   setValue(changedValue)
  // }
  // }

  // const clearLocalStorageHandler = () => {
  //   localStorage.clear()
  //   setValue(0)
  // }

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={incHandler}>inc</button>
      {/* <button onClick={setLocalStorageHandler}>setLocal</button>
      <button onClick={getFromLocalStorageHandler}>getLocal</button>
      <button onClick={clearLocalStorageHandler}>clear</button> */}
    </div>
  );
}

export default App;
