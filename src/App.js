import logo from './logo.svg';
import './App.css';
import Index from './component/index';
import { useEffect, useState } from 'react';

function App() {
  async function handleAPI() {
    const URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";
    const response = await fetch(URL);
    console.log(await response.json());


  }

  useEffect(() => {
    handleAPI();

  }, [])
  return (
    <div className="App">
      <div><h1>Counter</h1></div>
      <div>
        <Index />
      </div>
    </div>
  );
}


export default App;

