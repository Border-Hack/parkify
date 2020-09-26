import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Route path="/about" exact component={About} />
      <Route path="/" exact component={Home} />
    </Layout>
  );
}

export default App;
