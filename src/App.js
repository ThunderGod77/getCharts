import React, { useState, useEffect } from "react";
import FlashMessage from "react-flash-message";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";

import PieChart from "./Components/PieChart";

import TheContext from "./TheContext";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const showFlashMessage = async (text) => {
    await setMessage(text);
    setShowMessage(true);
  };

  return (
    <TheContext.Provider value={{ showFlashMessage: showFlashMessage }}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <div style={{ zIndex: 9 }}>
            {showMessage && (
              <FlashMessage duration={5000} persistOnHover={true}>
                <p>{message}</p>
              </FlashMessage>
            )}
          </div>
          <Switch>
            <Route path="/" exact>
              <h1>Hello World</h1>
            </Route>
            <Route path="/addPodcast" exact>
              <h1>LOL</h1>
            </Route>
            <Route path="/PieChart" exact>
              <PieChart />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </TheContext.Provider>
  );
}

export default App;
