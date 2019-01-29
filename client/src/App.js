import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import recordList from './components/recordList';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users/:userId/recordlist" component={recordList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;