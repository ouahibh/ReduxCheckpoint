import "./App.css";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ListTask from "./pages/listtask/listtask";
import AddTask from "./pages/addtask/addtask";
import NotFound from "./pages/notfound/notfound";

const App = () => {
  return (
    <div className={"contenairGlobal"}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/listtask" />
          </Route>
          <Route path={"/listtask"} component={ListTask} />
          <Route path={"/addtask"} component={AddTask} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
