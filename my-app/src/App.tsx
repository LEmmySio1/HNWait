import HNWait_Icon from './assets/HNWait_Icon.png'
import React from "react";
import './App.css'

function App() {
  return (
    <>
    {/* Header */}
    <div className = "header"> 
      <img src={HNWait_Icon} className="HNWait" alt='Icon'></img>
    </div>
    
    {/* Header Category*/}
    <div className = "Categoryheader">
      <button className = "Category" > Home Screen </button>
      <button className = "Category"> List </button>
      <button className = "Category"> Help </button>
    </div>
    </>
    
  )
}

export default App
