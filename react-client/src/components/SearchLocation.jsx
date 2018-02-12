import React from 'react';
import { Link } from 'react-router-dom';

class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.handleReturnKey = this.handleReturnKey.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.handleEatFilterClick = this.handleEatFilterClick.bind(this);
    this.handleSleepFilterClick = this.handleSleepFilterClick.bind(this);
    this.handleDoFilterClick = this.handleDoFilterClick.bind(this);
  }

  componentDidMount() {
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyCNRG6vRVSwfQoms39ey6RH6UscjBvqz74&libraries=places&language=en');
    var input = document.getElementById('location-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
    var context = this;
    $(document).keypress(function(e) {
      context.handleReturnKey(e);
    });
  }

  loadScript(src) {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName('body').appendChild(tag);
  }

  handleReturnKey(e) {
    if (e.key === 'Enter') {
      this.props.go(document.getElementById('location-input').value);
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.go(document.getElementById('location-input').value);
  }

  handleClear(e) {
    $('#location-input').val('');
    this.props.clearSearch();
  }

  isSelected(filter) {
    return this.props.show[filter] ? 'ui grey button' : 'ui inverted button';
  }

  handleEatFilterClick() {
    document.getElementById('location-input').focus();
    this.props.handleFilterClick(!this.props.show.eat, this.props.show.sleep, this.props.show.do);
  }

  handleSleepFilterClick() {
    document.getElementById('location-input').focus();
    this.props.handleFilterClick(this.props.show.eat, !this.props.show.sleep, this.props.show.do);
  }

  handleDoFilterClick() {
    document.getElementById('location-input').focus();
    this.props.handleFilterClick(this.props.show.eat, this.props.show.sleep, !this.props.show.do);
  }

  render() {
    return (
      <div className="ui container">
        <div className="headerDiv">
          <span className="searchDiv">
            <img src="../img/Voyager.png"/>
            <br />
            <br />
            <div className="ui fluid input">
              <input id="location-input" type="text" placeholder="I want to go to..."
                onKeyPress={ this.handleReturnKey }
              />
              <div id="go-button" className="ui teal button" onClick={ this.handleClick }>GO</div>
            </div>
            <div id="clear-button" className="ui button teal basic" onClick={ this.handleClear }>CLEAR RESULTS</div>
            <br />
            <br />
            <div>
              <button id="btn1" className={ this.isSelected('eat') } name="eat" value={ this.props.show.eat } onClick={ this.handleEatFilterClick }>Eat</button>

              <button id="btn2" className={ this.isSelected('sleep') } name="sleep" value={ this.props.show.sleep } onClick={ this.handleSleepFilterClick }>Sleep</button>

              <button id="btn3" className={ this.isSelected('do') } name="do" value={ this.props.show.do } onClick={ this.handleDoFilterClick }>Do</button>
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchLocation;
