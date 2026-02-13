import { StrictMode } from 'react'
import './index.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GeneralContextProvider>
    <Routes>
          <Route path='/*' element={<Home/>}/>
      </Routes>
  </GeneralContextProvider>
      
  </BrowserRouter>
)
