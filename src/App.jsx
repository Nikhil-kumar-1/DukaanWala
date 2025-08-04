import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ShopkeeperDashboard from './components/Shopkeeper/ShopkeeperDashboard'
import AuthPage from './components/AuthPage/AuthPage'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthPage type="login" />} />
      <Route path="/register" element={<AuthPage type="register" />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/shopkeeper" element={<ShopkeeperDashboard />} />
      </Route>
    </Routes>
  )
}

export default App
