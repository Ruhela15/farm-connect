import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'


const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
        <Navbar/>
        <Header/>
        <explore category={category} setCategory={setCategory}/>
        <AppDownload/>
    </div>
  )
}

export default Home