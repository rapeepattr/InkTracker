import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes'

function App() {

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 py-5">
        <AppRoutes />
      </div>
    </>
  )
}

export default App
