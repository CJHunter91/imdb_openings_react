import React from 'react';
import OpeningList from './OpeningList';

class OpeningMovies extends React.Component{

  constructor(){
    super();
    this.state = {
      data:[
      {title:"The Exception"},
      {title:"Flatliners"},
      {title:"Home Again"},
      {title:"Goodbye Christopher Robin"},
      {title:"On The Road"},
      {title:"Daphne"},
      {title:"Brimstone"}
      ]
    }
  }

  render(){
    return(
      <section className="opening-movies">
      <h3>UK Opening This Week</h3>
      <OpeningList data={this.state.data}/>
      <p><a href="http://www.imdb.com/calendar/?region=gb&pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=0MJG80K9DGZ1BSKH245V&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_sm">See more opening this week.</a></p>
      </section>
      )
  }
}

export default OpeningMovies;