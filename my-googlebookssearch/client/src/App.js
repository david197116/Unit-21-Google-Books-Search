// import React from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/LoginOld";
import Register from "./pages/Register";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  console.log('I am here');
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route appProps={{ isAuthenticated, userHasAuthenticated }} />
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
