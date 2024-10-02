import { Route, BrowserRouter } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import LandingPage from "./Components/Pages/LandingPage/LandingPage"
import MyNotes from "./Components/Pages/LandingPage/MyNotes/MyNotes"

function App() {
  return (
    <>
    <BrowserRouter>
    
     <Header></Header>

      <Route path="/" component={LandingPage} exact />
      <Route path="/mynotes" component={MyNotes} exact />

  

     <Footer></Footer>
    </BrowserRouter>

    </>
  )
}

export default App
