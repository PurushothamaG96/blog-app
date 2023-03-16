import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  const [datas, setDatas] = useState([])
  useEffect(()=>{
    fetchData()
  }, [])
  const fetchData = () =>{
    fetch("https://dummyjson.com/users")
    .then((res)=>res.json())
    .then((arr)=>{
      setDatas(arr.users)
    })
    .catch((e)=>console.log(e))
  }
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home datas={datas}/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
