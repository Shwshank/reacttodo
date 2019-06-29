import React from "react";
import { Route, HashRouter } from "react-router-dom";

import UserList from "./userList";
import UserDetails from "./userDetails";

class App extends React.Component {
  render() {
    return (

      <div>
        <HashRouter>
            <Route path="/" exact component={UserList} />
            <Route path="/userList" component={UserList} />
            <Route path="/userDetails/:id" component={UserDetails} />
        </HashRouter>
      </div>

    );
  }
}

export default App;
