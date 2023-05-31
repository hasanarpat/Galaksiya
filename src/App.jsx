import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Favorite from './pages/favorite/Favorite'
import Navbar from "./components/navbar/Navbar";
import './app.scss'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/single/:id" element={<Single/>} />
          <Route path="/favorite" element={<Favorite/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App