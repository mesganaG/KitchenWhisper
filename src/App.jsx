
import Navigation from './components/navigation'
import Footer from './components/footer'
import './App.css'
import Home from './pages/Home'
import MealDetail from './pages/mealDetail'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login'


function App() {


  return (
    <>

        <Navigation/>
        <Home />   
        <Footer />
        
        <div className="App">
          <Login />
        </div>
      
    </>

  )
}

export default App
