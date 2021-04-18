import React from "react";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import { AuthProvider } from "./Contexts/AuthContext";
import { CountryProvider } from "./Contexts/CountryContext";
import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CountryProvider>
          <Switch>
            <Route path='/signup' component={SignUp} />
            <Route path='/login' component={Login} />
            <Route path='/forget-password' component={ForgetPassword} />
            <PrivateRoute path='/' exact component={Homepage} />
          </Switch>
        </CountryProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
