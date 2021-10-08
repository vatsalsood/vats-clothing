import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage";
import ShopPage from "./pages/ShopPage/shoppage";
import "./pages/HomePage/homepage.styles.scss";
import Header from "./components/header/header";
import SigninSignout from "./pages/Sign-in-sign-out/sign-in-sign-out";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninSignout} />
      </Switch>
    </div>
  );
}

export default App;
