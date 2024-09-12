
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Home from './pages/Home'
import About from './pages/About'
// import ApiRickMorty from './pages/ApiRickMorty'
 
 

export default function App() {
  return (
    <>
    <Header />

    <Routes> 

      {/* <Route path='/'element={<Home /> }/>
      <Route path='/about'element={<About /> }/> */}
      {/* <Route path='/rick-morthy'element={<ApiRickMorty /> }/> */}

    </Routes>

    <Footer/>
    
    </>
  
  )
}


