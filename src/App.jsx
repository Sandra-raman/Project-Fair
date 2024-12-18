import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import { AuthContextResponse } from '../ContextAPI/AuthContext'
import { useContext } from 'react'



function App() {
    const {isAuthorized,setIsAuthorized}=useContext(AuthContextResponse)
  
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
    {
      isAuthorized &&
      <>
         <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/projects' element={<Projects/>}/>
         </>
    }
        <Route path='*' element={<Navigate to={'/'}/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
