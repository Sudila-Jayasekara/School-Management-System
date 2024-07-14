import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegisterForm from './pages/RegisterForm.jsx'
import User from './pages/user-management/User.jsx'
import SchoolForm from './pages/school-management/SchoolRegisterForm.jsx'
import SchoolTable from './pages/school-management/SchoolTable.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/users' element={<User />} />

      <Route path='/schoolform' element={<SchoolForm />} />
      <Route path="/schoolform/:id" element={<SchoolForm />} />
      
      <Route path='/schoolTable' element={<SchoolTable />} />
    </Routes>
  </BrowserRouter>
)
