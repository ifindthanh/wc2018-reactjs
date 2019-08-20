import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <div>
          {this.props.tableName}
          <hr class="table_split"/>
          <table>
          <tr>
            <th colspan="2" class="team">Đội</th>
            <th>DĐ</th>
            <th>BT</th>
            <th>SBT</th>
            <th>HS</th>
            <th>Điểm</th>
          </tr>
          {
            this.props.teams.map((item) =>
              <tr class="leagueTable">
                <td>{item.rank}</td>
                <td class="team"><img width="20" height = "10" src={item.crestURI} /> {item.team}</td>
                <td>{item.playedGames}</td>
                <td>{item.goals}</td>
                <td>{item.goalsAgainst}</td>
                <td>{item.goalDifference}</td>
                <td>{item.points}</td>
              </tr>
            )
          }
          </table>
        </div>
        );

    }
}
export default Table;
