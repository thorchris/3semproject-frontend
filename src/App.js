import "./App.css";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Burger from './components/Burger';
import Menu from './components/Menu';
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect, useRef } from "react";
import { useOnClickOutside } from './hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import HarryPotter from "./pages/HarryPotter";
import StarWars from "./pages/StarWars";
import NoMatch from "./components/NoMatch";
import SecurePage from "./pages/SecurePage";
import facade from "./api/userFacade";
import { LogIn, LoggedIn } from "./pages/Login";
import jwt_decode from "jwt-decode";
import Got from "./pages/Got";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  const [open, setOpen] = useState(false);

  const node = useRef(); 
useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
    if (loggedIn) {
      const token = facade.getToken();
      const decodedToken = jwt_decode(token);
      setUser(decodedToken);
      console.log(user);
    }
  }, [loggedIn]);

  function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return loggedIn === true && user.roles === "admin,user" ? (
            children
          ) : (
            <Redirect to="/login-out" />
          );
        }}
      />
    );
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
        <GlobalStyles />

      <Router>
        <Navbar
          loginMsg={loggedIn ? "Logout" : "Login"}
          isLoggedIn={loggedIn}
          user={user}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/harry-potter">
            <HarryPotter />
          </Route>
          <Route exact path="/starwars">
            <StarWars />
          </Route>
          <Route exact path="/Got">
            <Got />
          </Route>
          <PrivateRoute path="/secure-page">
            <SecurePage />
          </PrivateRoute>
          <Route path="/login-out">
            {!loggedIn ? (
              <LogIn login={login} />
            ) : (
              <div className="container-fluid padding">
                <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6 text-center">
                    <LoggedIn />
                    <button className="btn btn-primary" onClick={logout}>
                      Logout
                    </button>
                  </div>
                  <div className="col-3"></div>
                </div>
              </div>
            )}
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
              <div>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </Router>

      </>
      </ThemeProvider>
    </div>
  );
}
export default App;
