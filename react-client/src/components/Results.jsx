import React from 'react';
import EatView from './EatView.jsx';
import SleepView from './SleepView.jsx';
import ExploreView from './ExploreView.jsx';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <EatView restaurants={ this.props.restaurants }/>
        </div>
        <hr/>
        <div>
          <SleepView hotels={ this.props.hotels } />
        </div>
        <hr/>
        <div>
          <ExploreView events={ this.props.events } />
        </div>
      </div>
    );
  }
}

export default Results;
{/*
        <PartyView />
      <div>
        <Link to='/eat'>Eat</Link>
        <PartyView />
        <SleepView />
        <ExploreView />
      </div>


        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to={'/eat'}>Eat</Link>
                <Link to={'/party'}>Party</Link>
                <Link to={'/sleep'}>Sleep</Link>
                <Link to={'/explore'}>Explore</Link>
              </div>
            </div>
          </nav>
          <div>
            <Switch>
              <Route path="/eat" render={() => <EatView eat={ this.props.eat } />} />
            </Switch>
          </div>
        </div>
*/}