import './App.css';
import React from 'react';
import * as mui from '@mui/material'
// import type { duration } from '@mui/material/styles';
import * as motion from "motion/react-client"
// import './components/ui/backgroundstyle.css';

// Routing Imports
import {createBrowserRouter} from "react-router-dom"



// Pages: 
import HomePage from './components/homepage/HomePage';

const router = createBrowserRouter([
  {path: "/" ,element: <App />},
  {path: "/homepage", element: <HomePage/>},
]);



function App() {
  
  // const square = <div
  //   style={{
  //       width: 100,
  //       height: 100,
  //       backgroundColor: "#98c379",
  //       borderRadius: 5,
  //   }}
  // />
  // box = <motion.div style={square}/>

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
  }
  const button = <button type="button"></button>


  return (
    <div>
      <mui.Button>Boiiii</mui.Button>
    </div>
  )
}

export default App
