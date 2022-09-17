import Register from './pages/Register.js'
import Login from './pages/Login.js'
import Home from './pages/Home.js'
import Admin from './pages/Admin.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div className='App bg-gradient-to-b from-[#BBC2FA] to-white'>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route exact path='*' element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
