import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import FoodDisply from '../../components/FoodDisplay/FoodDisply';
import ExploreMenu from '../../components/ExploreMenu/exploreMenu';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisply category={category} />
        <AppDownload />
    </div>
  );
}

export default Home
