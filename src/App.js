import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/about" exact component={About} />
      <Route path="/" exact component={Home} />
    </Layout>
  );
}

export default App;
