import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage";
import ShopPage from "./pages/ShopPage/shoppage";
import "./pages/HomePage/homepage.styles.scss";
import Header from "./components/header/header";
import SigninSignout from "./pages/Sign-in-sign-out/sign-in-sign-out";
import { auth } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
