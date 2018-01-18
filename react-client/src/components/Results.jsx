import React from 'react';
import EatView from '../Greenfield/EatView.jsx';
import PartyView from '../Greenfield/PartyView.jsx';
import SleepView from '../Greenfield/SleepView.jsx';
import ExploreView from '../Greenfield/ExploreView.jsx';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EatView />
        <PartyView />
        <SleepView />
        <ExploreView />
      </div>
    );
  }
}

export default Results;