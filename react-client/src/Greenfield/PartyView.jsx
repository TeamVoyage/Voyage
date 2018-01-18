import React from 'react';
import PartyViewListEntry from './PartyViewListEntry.jsx';

let PartyView = (props) => {

  return (
    <div className="viewTable">
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.party.map(item =>
            <PartyViewListEntry key={props.party.indexOf(item)} item={item} />
          ) }
        </tbody>
      </table>
    </div>
  );
};


export default PartyView;

