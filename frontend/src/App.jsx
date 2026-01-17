import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Root from './utils/Root.jsx'
import Login from './pages/login.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< Root />} />
        <Route path="/admin/dashboard" element={<ProtectedRoutes requireRole={["admin"]}><h1>admin dashboard</h1></ProtectedRoutes>} />
        <Route path="/customer/dashboard" element={<h1>customer dashboard</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/unauthorized" element={<h1>Unauthorized user</h1>} /> 
      </Routes>
    </Router>
  )
}

export default App
