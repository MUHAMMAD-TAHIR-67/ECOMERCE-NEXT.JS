'use client'
import React from "react";

import HeaderSlider from "../../components/HeaderSlider";
import Navbar from "../../components/Navbar";
import HomeProducts from "../../components/HomeProducts";
import FeaturedProduct from "../../components/FeaturedProduct";
import Banner from "../../components/Banner";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="px-6 md:px-16 lg:px-32">
        <HeaderSlider />
        <HomeProducts />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
