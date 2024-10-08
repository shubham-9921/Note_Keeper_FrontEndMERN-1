import { Route, BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./Components/Pages/LandingPage/LandingPage";
import MyNotes from "./Components/Pages/MyNotes/MyNotes";
import RegisterScreen from "./Components/Pages/RegisterScreen/RegisterScreen";
import LoginScreen from "./Components/Pages/LoginScreen/LoginScreen";
import CreateNote from "./Components/Pages/CreateNote/CreateNote";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Route path="/" component={LandingPage} exact />
        <Route path="/mynotes" component={MyNotes} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/createnote" component={CreateNote} exact />
        <Route path="/login" component={LoginScreen} exact />

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
