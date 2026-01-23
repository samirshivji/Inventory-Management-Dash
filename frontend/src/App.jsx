import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Root from './utils/Root.jsx'
import Login from './pages/login.jsx'
import ProtectedRoutes from './utils/ProtectedRoutes.jsx'
import Dashboard from './pages/dashboard.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={< Root />} />
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoutes requireRole={["admin"]}>
               <Dashboard /> 
            </ProtectedRoutes>
          }
        >
        <Route
         index 
         element={<h1>Summary of Dashboard</h1>} 
         />
        </Route>
        <Route path="/customer/dashboard" element={<h1>customer dashboard</h1>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/unauthorized" element={<h1>Unauthorized user</h1>} /> 
      </Routes>
    </Router>
  )
}

export default App
