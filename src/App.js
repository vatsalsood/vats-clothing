import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage";
import ShopPage from "./pages/ShopPage/shoppage";
import "./pages/HomePage/homepage.styles.scss";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
