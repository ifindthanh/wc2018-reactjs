import React, { Component } from 'react';
import Time from 'react-time';

class MatchResult extends Component {
    constructor(props) {
      super(props);

    }



    render() {
      var fixture = this.props.fixture;
      var i = this.props.index;
      return (
        <tr className="track" key={i}>
          {
            fixture.status =='SCHEDULED'?
                <td><span className="title">NA</span></td>
                :
                <td><img width="20" height = "10" src={fixture._links.homeTeam.crestUrl} /> <span className="title">{fixture.homeTeamName}</span></td>
        }
        {
          fixture.status =='FINISHED'?
              <td><span>{fixture.result.goalsHomeTeam} - {fixture.result.goalsAwayTeam}</span></td>
              :
              <td><span>? - ?</span></td>
      }


          {
            fixture.status =='SCHEDULED'?
                <td><span className="title">NA</span></td>
                :
                <td><img width="20" height = "10" src={fixture._links.awayTeam.crestUrl} /> <span className="title">{fixture.awayTeamName}</span></td>
        }
          <td> <span>
            {fixture.dateFormatted}

            </span> </td>
        </tr>
      );

    }
}
export default MatchResult;
