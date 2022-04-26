import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { IndexPage } from '../components/ui/IndexPage'
import MenuPage from '../components/ui/MenuPage'

export const AppRouter = () => {



  return (
    <div>
        <Routes>
       
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen /> } />
            <Route path="/menu" element={<IndexPage /> } />
            <Route path="/menu2" element={<MenuPage /> } />
            <Route path="*" element={<LoginScreen />} />


        </Routes>
        
    </div>
  )
}
