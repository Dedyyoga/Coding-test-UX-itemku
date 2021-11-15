import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./page/PageHome";
import { Route, Switch } from "react-router-dom";
import Detail from "./page/PageDetail";
const App = () => {
  return (
    <div>
      <Switch>
        {/* <Navbar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/detail" component={Detail} />
        {/* <Footer /> */}
      </Switch>
    </div>
  );
};

export default App;
