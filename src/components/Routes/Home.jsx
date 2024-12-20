import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Categories from '../pages/Categories/Categories'
import Products from '../pages/Products/Products'

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Products />
    </div>
  )
}

export default Home
