import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage";
import "./pages/HomePage/homepage.styles.scss";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
