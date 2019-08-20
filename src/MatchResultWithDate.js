import React, { Component } from 'react';
import MatchResult from "./MatchResult.js"

class MatchResultWithDate extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      var fixturebyDay = this.props.fixturebyDay;
      var i = this.props.index;
      return (
        <React.Fragment>
        <tr><td class="text_left" colSpan="4">
          <span class="text_u">{fixturebyDay.date}</span>
        </td></tr>
        {
          fixturebyDay.fixtures.map((fixture, j) =>
            <MatchResult fixture={fixture} index={j} />
          )
        }

        </React.Fragment>
      );

    }
}
export default MatchResultWithDate;
