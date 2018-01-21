import React from 'react';
import Like from './Like.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    // console.log('props: ', this.props);

    return (
      <div id="board">
        <div className="ui grid container">

          <div className="four column">
            <div className="column">
              <div className="ui card">
                  <div className="image">
                    <img src="https://s3-media4.fl.yelpcdn.com/bphoto/pzsEbZQhdKvtZOrNs9Q3VA/o.jpg" />
                  </div>
                  <div className="content">
                    <a className="header">Kristy</a>
                    <div className="meta">
                      <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                      Kristy is an art director living in New York.
                    </div>
                  </div>
                </div>
              </div>

            <div className="column">

             <div className="ui card">
                <div className="image">
                  <img src="https://s3-media4.fl.yelpcdn.com/bphoto/pzsEbZQhdKvtZOrNs9Q3VA/o.jpg" />
                </div>
                <div className="content">
                  <a className="header">Kristy</a>
                  <div className="meta">
                    <span className="date">Joined in 2013</span>
                  </div>
                  <div className="description">
                    Kristy is an art director living in New York.
                  </div>
                </div>
              </div>

            </div>
            
            <div className="column">

               <div className="ui card">
                <div className="image">
                  <img src="https://s3-media4.fl.yelpcdn.com/bphoto/pzsEbZQhdKvtZOrNs9Q3VA/o.jpg" />
                </div>
                <div className="content">
                  <a className="header">Kristy</a>
                  <div className="meta">
                    <span className="date">Joined in 2013</span>
                  </div>
                  <div className="description">
                    Kristy is an art director living in New York.
                  </div>
                </div>
              </div>

            </div>
            
            <div className="column">

              <div className="ui card">
                <div className="image">
                  <img src="https://s3-media4.fl.yelpcdn.com/bphoto/pzsEbZQhdKvtZOrNs9Q3VA/o.jpg" />
                </div>
                <div className="content">
                  <a className="header">Kristy</a>
                  <div className="meta">
                    <span className="date">Joined in 2013</span>
                  </div>
                  <div className="description">
                    Kristy is an art director living in New York.
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Board;

