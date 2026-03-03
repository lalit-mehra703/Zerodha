import { StrictMode } from 'react'
import { CookiesProvider } from "react-cookie";
import './index.css';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import { GeneralContextProvider } from "./components/GeneralContext";


createRoot(document.getElementById('root')).render(
  <CookiesProvider>
  <BrowserRouter>
  <GeneralContextProvider>
    <Routes>
          <Route path='/*' element={<Home/>}/>
      </Routes>
  </GeneralContextProvider>
      
  </BrowserRouter>
  </CookiesProvider>
)
