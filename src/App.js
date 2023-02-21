import React from "react";

import 'primereact/resources/themes/vela-blue/theme.css';   // theme lara-light-blue, bootstrap4-light-blue luna-amber
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';        
import Navigation from "./component/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Test from "./component/test";
import "./component/i18nextInit";
import Singletest from "./component/singleTest";

function App() {
  return (

      <div> 
        <Navigation />
      
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path='/singletest' element={<Singletest/>}/>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
