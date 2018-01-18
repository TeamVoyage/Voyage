import React from 'react';
import Header from './header.jsx';
import TripView from './TripView.jsx';

class App extends React.Components {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <TripView />
      </div>
    );
  }
}

export default App;
