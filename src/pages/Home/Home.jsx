import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/navbar/Navbar';
// import Footer from '../../components/Footer/Footer';
import AppDownload from '../../components/AppDownload/AppDownload';
import FoodDisply from '../../components/FoodDisplay/FoodDisply';
import ExploreMenu from '../../components/ExploreMenu/exploreMenu';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
        <Navbar />
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisply category={category} />
        <AppDownload />
        {/* <Footer /> */}
    </div>
  );
}

export default Home;
