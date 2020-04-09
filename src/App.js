import React from "react";
import { Router, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { createBrowserHistory as createHistory } from "history";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
const history = createHistory();
function App({ calendarStore }) {
  return (
    <div>
      <Router history={history}>
        <Route
          path="/"
          exact
          component={props => (
            <HomePage {...props} calendarStore={calendarStore} />
          )}
        />
      </Router>
    </div>
  );
}
export default App;
