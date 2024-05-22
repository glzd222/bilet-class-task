
import './App.css'
import AddProductPage from './Pages/AddProductPage';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import Footer from './layout/Footer'
import Header from './layout/Header'
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Header/>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/addproductpage' element={<AddProductPage/>}/>
<Route path='/product/:id' element={<ProductDetailsPage/>}/>
<Route path='/*' element={<NotFoundPage/>}/>
</Routes>

      <Footer/>
    </>
  )
}

export default App
