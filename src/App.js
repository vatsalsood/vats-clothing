import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/homepage";
import ShopPage from "./pages/ShopPage/shoppage";
import "./pages/HomePage/homepage.styles.scss";
import Header from "./components/header/header";
import SigninSignout from "./pages/Sign-in-sign-out/sign-in-sign-out";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // this.setState({ currentUser: user });
      // createUserProfileDocument(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          console.log("snapShot", snapShot.data());
          this.setState({
            currentUser: { id: snapShot.id },
            ...snapShot.data(),
          });
        });
        console.log(this.state);
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
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
