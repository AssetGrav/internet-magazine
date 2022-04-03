import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/common/header";
import Basket from "./components/page/basket";
import Goodpage from "./components/page/goodpage";
import Homepage from "./components/page/homepage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/basket" component={Basket} />
        <Route path="/goods/:goodId?" component={Goodpage} />
        <Route path="/" exact component={Homepage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
