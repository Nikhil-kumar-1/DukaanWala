import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import ShopkeeperDashboard from './components/Shopkeeper/ShopkeeperDashboard'

const App = () => {
  return (
    <>
   
      <Routes>
       
       
        
        <Route path="/" element={<Home />} />

         {/* shopkeeper Section */}
         <Route path="/shopkeeper" element={<ShopkeeperDashboard />} />

      </Routes>
   
       
    </>
  )
}

export default App
