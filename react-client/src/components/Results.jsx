import React from 'react';
import EatView from './EatView.jsx';
import SleepView from './SleepView.jsx';
import ExploreView from './ExploreView.jsx';
import View from './View.jsx';

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
        <div>
          <h2>Food & Drinks!!! | { this.props.info.location }</h2>
          <View
            info={ this.props.info }
            addEventToUser={ this.props.addEventToUser }
            category={ this.props.info.categories.restaurants }
          />
        </div>
      </div>
    );
  }
}

export default Results;
