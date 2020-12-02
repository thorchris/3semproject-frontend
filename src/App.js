import "./App.css";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import HarryPotter from "./pages/HarryPotter";
import StarWars from "./pages/StarWars";
import NoMatch from "./components/NoMatch";
import SecurePage from "./pages/SecurePage";
import facade from "./api/userFacade";
import { LogIn, LoggedIn } from "./pages/Login";
import jwt_decode from "jwt-decode";
import Got from "./pages/Got";
import Sidemenu from "./components/Sidemenu/Sidemenu"
import "./components/Sidemenu/sidemenu.css"
import { MDBBtn } from "mdbreact";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  let empty = "";
  const whoVotedList = [{ empty, empty }];

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

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
            <Sidemenu
              loginMsg={loggedIn ? "Logout" : "Login"}
              isLoggedIn={loggedIn}
              user={user}
            />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/harry-potter">
                <HarryPotter
                  loggedIn={loggedIn}
                  user={user}
                  whoVotedList={whoVotedList}
                />
              </Route>
              <Route exact path="/starwars">
                <StarWars
                  loggedIn={loggedIn}
                  user={user}
                  whoVotedList={whoVotedList}
                />
              </Route>
              <Route exact path="/Got">
                <Got
                  loggedIn={loggedIn}
                  user={user}
                  whoVotedList={whoVotedList}
                />
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
                        <MDBBtn
                          outline
                          color="primary"
                          rounded
                          size="m"
                          className="mr-auto"
                          onClick={logout}
                        >
                          Logout
                        </MDBBtn>
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
          </Router>
        </>
      </ThemeProvider>
    </div>
  );
}
export default App;
