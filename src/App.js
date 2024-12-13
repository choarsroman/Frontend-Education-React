import './App.css'
import Banner from './components/Banner/Banner.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Categories from './components/pages/Categories/Categories.jsx'
import Products from './components/pages/Products/Products.jsx'
import Sales from './components/Sales/Sales.jsx'

function App() {
  return (
    <>
      <Sales />
      <div className="App">
        <Header />
        <Banner />
        <Categories />
        <Products />
      </div>
      <Footer />
    </>
  )
}

export default App
