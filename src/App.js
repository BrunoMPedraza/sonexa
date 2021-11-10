import './App.css';
import Header from './components/Header/Header'
import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Services from './pages/Services'


function App() {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },3000)
  })

  return (
    <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/clients" element={<Clients/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
        </Routes>
    </>
  );
}

export default App;
