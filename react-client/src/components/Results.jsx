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
          {console.log('restaurants', this.props.info.categories.restaurants)}
          <EatView info={ this.props.info }/>
        }
        </div>
        <hr/>
        <div>
          {console.log('restaurants', this.props.info.categories.hotels)}
          <SleepView info={ this.props.info } />
        </div>
        <hr/>
        <div>
         {console.log('restaurants', this.props.info.categories.events)}
          <ExploreView info={ this.props.info } />
        </div>
      </div>
    );
  }
}

export default Results;
