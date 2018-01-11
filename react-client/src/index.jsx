import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SearchLocation from './components/SearchLocation.jsx';
import AddPrice from './components/AddPrice.jsx';
import Header from './components/navHeader.jsx';
import AddCategory from './components/AddCategory.jsx';

class Index extends React.Component {
  constructor(props) {
    console.log('index');
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Trip collab</h1>
        <div>
          <SearchLocation />
          <AddPrice />
          <AddCategory />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
