import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/pages/Cart/Cart'
import Wishlist from './components/pages/Wishlist/Wishlist'
import MainLayouts from './layouts/MainLayouts'
import Home from './components/Routes/Home'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
