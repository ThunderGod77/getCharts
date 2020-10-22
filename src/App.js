import React, { useState, useEffect } from "react";
import FlashMessage from "react-flash-message";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./Components/Navigation";

import PieChart from "./Components/PieChart";
import BarChart from "./Components/BarChart.js";

import TheContext from "./TheContext";

import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const showFlashMessage = async (text) => {
    await setMessages(messages.concat([text]));
    setShowMessage(true);
  };

  return (
    <TheContext.Provider value={{ showFlashMessage: showFlashMessage }}>
      <div className="App">
        <BrowserRouter>
          <Navigation />
          {showMessage && (
            <div
              style={{
                zIndex: 9,
                backgroundColor: "#C82333",
                color: "white",
                width: "15%",
                marginLeft: "auto",
                marginRight: "auto",
                border: "1px solid white",
                borderRadius: "5px!important",
                fontSize: "20px",

                position: "absolute",
                left: "42.5%",
                top: "6%",
              }}
            >
              {messages.map((message) => {
                return (
                  <FlashMessage duration={5000} persistOnHover={true}>
                    <p>{message}</p>
                  </FlashMessage>
                );
              })}
            </div>
          )}

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
            <Route path="/BarChart" exact>
              <BarChart />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </TheContext.Provider>
  );
}

export default App;
