import React, { Fragment } from 'react'
import Banner from '../Components/HomePageComponents/Banner'
import CategoryList from '../Components/HomePageComponents/CategoryList'
import HorizontalDisplayStream from '../Components/HomePageComponents/HorizontalDisplayStream'

function Home() {
  return (
    <>
    <CategoryList/>
    <Banner/>
    {/* Products Display */}
    <HorizontalDisplayStream subcategory={"Smartphones"} heading={"Top Deal On Latest SmartPhone's"} />
    </>
    
  ) 
}

export default Home
