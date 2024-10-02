import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Products from './components/products/Products'
import './index.css'
import Detail from './components/detail/Detail'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header item={["Home", "About", "Services", "Contact"]}/>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
      <Footer links={["Home", "About", "Services", "Contact"]} resources={["FAQ", "Blog", "Privacy Policy", "Terms & Conditions"]}/>
    </>
  )
}

export default App