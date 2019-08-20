import React, { Component } from 'react';
import Table from "./Table.js"

class LeagueTable extends Component {
  constructor(props) {
    super(props);
    this.state={leagueTable: ""};
  }

  componentDidMount() {
    fetch(`/leagueTable/`)
    .then(data => data.json())
		.then((result) => {
      this.setState({
        "leagueTable": result
      })
		});
  }

  render() {
    if (this.props.active && this.state.leagueTable.code===1) {
      return (
        <article id='bxh'>
          <h2 class="major">Bảng Xếp Hạng</h2>
          <span class="image main"><img src="images/pic01.jpg" alt="" /></span>
          <Table tableName="Bảng A" teams= {this.state.leagueTable.result.standings.a} />
          <Table tableName="Bảng B" teams= {this.state.leagueTable.result.standings.b} />
          <Table tableName="Bảng C" teams= {this.state.leagueTable.result.standings.c} />
          <Table tableName="Bảng D" teams= {this.state.leagueTable.result.standings.d} />
          <Table tableName="Bảng E" teams= {this.state.leagueTable.result.standings.e} />
          <Table tableName="Bảng F" teams= {this.state.leagueTable.result.standings.f} />
          <Table tableName="Bảng G" teams= {this.state.leagueTable.result.standings.g} />
          <Table tableName="Bảng H" teams= {this.state.leagueTable.result.standings.h} />
        </article>
      );
    } else {
      return (
        <article id="bxh" class="hidden">
          <h2 class="major">Bảng Xếp Hạng</h2>
          <span class="image main"><img src="images/pic02.jpg" alt="" /></span>
          <p>Đã xảy ra lỗi</p>
        </article>
    );
    }

  }
}
export default LeagueTable;
