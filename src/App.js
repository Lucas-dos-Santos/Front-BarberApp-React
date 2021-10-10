import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";
import HomePage from "./pages/HomePage";
import Schedulings from "./pages/Schedulings";
import ToSchedule from "./pages/ToSchedule";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/horarios" component={Calendar} />
      <Route exact path="/agendamentos" component={Schedulings} />
      <Route exact path="/agendar/:hour/:date" component={ToSchedule} />
    </Switch>
    <ToastContainer autoClose={3000} className="toast-container" />
  </BrowserRouter>
);

export default App;
