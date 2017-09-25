import React from 'react';
import Opening from './Opening';

class OpeningList extends React.Component{

  render(){
    return(
        <article className = "opening-list">
          <Opening title="The Exception"></Opening>
          <Opening title="Flatliners"></Opening>
        </article>
      )
  }

}

export default OpeningList;