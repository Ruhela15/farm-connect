import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import FoodDisply from '../../components/FoodDisplay/FoodDisply'

const Home = () => {
  return (
    <div>
        <Header/>
        <FoodDisply category ={category}  />
    </div>
  )
}

export default Home