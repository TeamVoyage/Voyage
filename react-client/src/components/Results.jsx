import React from 'react';
import EatView from './EatView.jsx';
import SleepView from './SleepView.jsx';
import ExploreView from './ExploreView.jsx';

class Results extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <EatView
            info={ this.props.info }
            addEventToUser={ this.props.addEventToUser } />
        </div>
        <hr/>
        <div>
          <SleepView
            info={ this.props.info }
            addEventToUser={ this.props.addEventToUser } />
        </div>
        <hr/>
        <div>
          <ExploreView
            info={ this.props.info }
            addEventToUser={ this.props.addEventToUser } />
        </div>
      </div>
    );
  }
}

export default Results;
