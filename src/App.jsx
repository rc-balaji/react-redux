import { useState } from 'react'
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Cart } from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './redux/cart'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Provider store={store} >
    <BrowserRouter>

    <nav>
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to={'/cart'} >Cart</Link></li>
        </ul>    </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    
    
    </BrowserRouter>
    </Provider>

   </div>
  )
}

export default App
