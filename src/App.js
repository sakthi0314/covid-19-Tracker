import React from "react";
import Layout from "./Components/Layout/Layout";
import Navbar from "./Components/Navbar/Navbar";
import { CountryProvider } from "./Contexts/CountryContext";

function App() {
  return (
    <CountryProvider>
      <Navbar />
      <Layout />
    </CountryProvider>
  );
}

export default App;
