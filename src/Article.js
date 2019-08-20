import React, { Component } from 'react';
import LeagueTable from './LeagueTable.js';
import Contact from './Contact.js';
import Fixtures from './Fixtures.js';

class Article extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div id="main">
          <LeagueTable active={this.props.selected==='bxh'?true:false}/>
          <Fixtures active={this.props.selected==='fixtures'?true:false}/>
          <Contact active={this.props.selected==='contact'?true:false}/>

        </div>
      );
    }

}
export default Article;
