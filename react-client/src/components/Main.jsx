import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Results from './Results.jsx';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/login' component={ Login } />
          <Route path='/search' component={ Results } />

{/*          <Route path="/eat" render={() => <EatView eat={ this.props.eat } />} />
          <Route path="/party" render={() => <PartyView party={ this.props.party } />} />
          <Route path="/sleep" render={() => <SleepView sleep={ this.props.sleep } />} />
          <Route path="/explore" render={() => <ExploreView explore={ this.props.explore } />} />
*/}
        </Switch>
      </main>
    );
  }

  // <Switch> tag used to ensure that only the matching path component will render
  // Example: Without <Switch>, "/e" and "/eat" path components would both render
  // because "/e" path matches the first two strings in "/eat"
  // More info here: https://reacttraining.com/react-router/web/api/Switch

}

export default Main;