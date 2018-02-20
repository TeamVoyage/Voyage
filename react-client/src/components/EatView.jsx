import React from 'react';
import EatViewListEntry from './EatViewListEntry.jsx';

const EatView = (props) => {
  return (
    <div className="viewTable">
      <table>
        <thead>
          <tr>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {props.eat.map(item =>
            <EatViewListEntry key={props.eat.indexOf(item)} item={item} />)}
        </tbody>
      </table>
    </div>
  );
};


export default EatView;

