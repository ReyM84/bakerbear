import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
