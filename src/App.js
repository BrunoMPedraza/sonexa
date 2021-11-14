import './App.css';
import Header from './components/Header/Header'
import React,{useState,useEffect} from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Error404 from './pages/Error404';


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
          <Route path="*" element={<Error404/>}/>
        </Routes>
    </>
  );
}

export default App;
