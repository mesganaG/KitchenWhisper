
import Navigation from './components/navigation'
import Footer from './components/footer'
import './App.css'
import Home from './pages/Home'
import MealDetail from './pages/mealDetail'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {


  return (
    <>

        <Navigation/>
        <Home />   
        <Footer />
      
     
    </>
  )
}

export default App
