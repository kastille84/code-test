import React from "react";

import "./App.css";

import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import ListView from "./containers/ListView/ListView.component";

function App() {
  return (
    <main className="App">
      <Header hideFirstEl={false} />
      <ListView />
      <Footer />
    </main>
  );
}

export default App;
