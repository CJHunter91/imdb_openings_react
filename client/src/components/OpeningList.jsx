import React from 'react';
import Opening from './Opening';

class OpeningList extends React.Component{



  render(){

    const openingNodes = this.props.data.map((opening, index) =>{
      return <Opening title={opening.title} key={index}/>
    })

    return(
        <article className = "opening-list">
          {openingNodes}
        </article>
      )
  }

}

export default OpeningList;