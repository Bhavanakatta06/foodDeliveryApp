import React from 'react'
import Navbar from './components/Navbar/navbar'
import Sidebar from './components/sideBar/sideBar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/add'
import List from './pages/List/list'
import Orders from './pages/Orders/orders'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url = "http://localhost:3000";
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path = "/add" element={<Add url = {url}/>}></Route>
          <Route path = "/list" element={<List url = {url}/>}></Route>
          <Route path = "/orders" element={<Orders url = {url}/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
