import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/navbar/Navbar'
import FoodDisply from '../../components/FoodDisplay/FoodDisply'


const Home = () => {
//   const [category, setCategory] = useState("All");

  return (
    <div>
        <Navbar/>
        <Header />
        {/* <Explore category={category} setCategory={setCategory} /> */}
        <FoodDisply category ={category}/>
    </div>
  );
}

export default Home
