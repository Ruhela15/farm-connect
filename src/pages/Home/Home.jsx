import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/footer';
import AppDownload from '../../components/AppDownload/AppDownload';


const Home = () => {
//   const [category, setCategory] = useState("All");

  return (
    <div>
        <Navbar/>
        <Header />
        {/* <Explore category={category} setCategory={setCategory} /> */}
        <AppDownload/>
        <Footer/>
    </div>
  );
}

export default Home
