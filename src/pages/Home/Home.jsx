import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'


const Home = () => {
//   const [category, setCategory] = useState("All");

  return (
    <div>
        <Navbar />
        <Header />
        {/* <Explore category={category} setCategory={setCategory} /> */}
    </div>
  );
}

export default Home
