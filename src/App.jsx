import { useState } from 'react'
import './App.css'
import Movie from './components/Movie'
import axios from 'axios';

function App() {
 
  return (
    <>
      <div className="card">
        
      <Movie/>
      <Movie/>
     
      </div>
    </>
  );
}



export default App;
