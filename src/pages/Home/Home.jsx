import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'

const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div>
        <Header/>
        <explore category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home