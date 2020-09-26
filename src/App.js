import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Route path="/" exact component={Home} />
    </Layout>
  );
}

export default App;
