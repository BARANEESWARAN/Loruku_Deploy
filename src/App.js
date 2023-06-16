import React, { useState } from 'react';


import {BrowserRouter, Route, Routes} from "react-router-dom"

import Callback from './Callback';
import Promise from './image/Promisefun';
import Promisefun from './image/Promisefun';
import AsyncAwait from './image/AsyncAwait';
import Demowebsite from './image/Demowebsite';
import Features from './image/Features';
import Docs from './image/Docs';
import Header from './image/Header';
import Footer from './image/Footer';
function App() {



return(
//   <>

// {/* <Callback/> */}
// {/* <Promisefun/> */}
// {/* <AsyncAwait/> */}
// {/* <Demowebsite/> */}

// </>
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Demowebsite/>} />
  <Route path="/features" element={<Features/>} />
  <Route path="/docs" element={<Docs/>} />
</Routes>
<Footer/>
</BrowserRouter>

)
}

export default App;
