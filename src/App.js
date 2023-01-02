import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News';
import React from "react";
import { useState } from "react";

import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const pageSize=6;
  const apiKey='311cc676f65a497696501027cf6c04e9'

  const [progress, setProgress] = useState(0)
 
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={progress}
        
      />
     
      <Routes>
      <Route exact path="/" element={<News setProgress  ={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country= "us" category = "general"/>}></Route>
        <Route exact path="/business"element={<News setProgress  ={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country= "us" category = "business"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress  ={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country= "us" category = "entertainment"/>}></Route>
        <Route exact path="/health" element={<News setProgress  ={setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country= "us" category = "health"/>}></Route>
        <Route exact path="/science" element={<News setProgress  ={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country= "us" category = "scinece"/>}></Route>
        <Route exact path="/sports" element={<News setProgress  ={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country= "us" category = "sports"/>}></Route>

         <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
      
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;