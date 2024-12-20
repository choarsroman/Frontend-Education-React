import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner/Banner.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Categories from './components/pages/Categories/Categories.jsx'
import Products from './components/pages/Products/Products.jsx'
import Sales from './components/Sales/Sales.jsx'
import AppRouter from './AppRouter.jsx'
import Wishlist from './components/pages/Wishlist/Wishlist.jsx'

function App() {
  return (
    <>
      <div className="App">
        <AppRouter />
      </div>
      <Footer />
    </>
  )
}

export default App
