import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import UserImfo from './components/UserImfo';
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
      <Route path='/' element={<Home data={datas}/>}/>
      <Route path="/userinfo" element={<UserImfo/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
