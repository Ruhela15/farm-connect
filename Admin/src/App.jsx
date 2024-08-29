import React from 'react';
import Navbar from './components/NavBar/Navbar';
import SideBar from './components/SideBar/SideBar';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

    const url = "http://localhost:4000"

  return (
    <>
    <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/" element={<List url = {url}/>} />
          <Route path="/add" element={<Add url = {url}/>} />
          <Route path="/list" element={<List url = {url}/>} />
          <Route path="/orders" element={<Orders url = {url}/>} />
        </Routes>
      </div>
      </>
  );
};

export default App;
