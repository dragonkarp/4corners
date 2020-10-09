import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./pages/Tasks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Person from "./pages/Person";
import Team from "./pages/Team";
import Resources from "./pages/Resources";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
       
              <Route exact path="/person" component={Person} />
              <Route exact path="/team" component={Team} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/create" component={CreateAccount} />
              {/* <Route path="/404" component={NoMatchPage} />
              <Redirect to="/404" /> */}

          <Route exact path={["/", "/tasks"]}>
            <Tasks />
          </Route>

          <Route exact path="/tasks/:id">
            <Detail />
          </Route>

          <Route>
            <NoMatch />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
