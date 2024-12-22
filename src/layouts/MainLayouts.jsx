import React from 'react'
import Sales from '../components/Sales/Sales'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayouts = () => {
  return (
    <>
      <Sales />
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayouts
