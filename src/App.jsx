import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto p-4 py-5">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
