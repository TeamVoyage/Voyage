import React from 'react';
import ReactDOM from 'react-dom';

class Voyage extends React.Component {

  render() {
    
    console.log('from appHeader.jsx');

    return (
      <div class="voyage">
        <p>Voyage title</p>
        <p>Voyage city</p>
        <p>Voyage planner</p>
      </div>
    )
  }
}

export default Voyage;