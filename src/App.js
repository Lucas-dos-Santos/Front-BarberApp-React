import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Calendar from "./components/Calendar";
import HomePage from "./pages/HomePage";
import Scheduling from "./pages/Scheduling";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/horarios" component={Calendar} />
      <Route exact path="/agendar" component={Scheduling} />
    </Switch>
  </BrowserRouter>
);

export default App;
