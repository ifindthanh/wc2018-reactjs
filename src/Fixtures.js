import React, { Component } from 'react';
import InfiniteScroll from "react-infinite-scroller"
import MatchResultWithDate from "./MatchResultWithDate.js"

class Fixtures extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fixturesByDay: [],
        hasMoreItems: true,
        nextPage: 1
      };
    }

    loadItems(){
      var self = this;
      fetch(`/fixturesByDay?page=` + this.state.nextPage)
      .then(data => data.json())
  		.then((result) => {
        var fixturesByDay = self.state.fixturesByDay;
        result.result.fixturesByDay.map((fixture) => {
          fixturesByDay.push(fixture);
        });
        this.setState({
          fixturesByDay: fixturesByDay,
          hasMoreItems: result.result.hasMoreElement,
          nextPage: result.result.nextIndex
        })
  		});
    }

    render() {
      var loader = <div className="loader">Loading ...</div>;

      if (this.props.active) {
        var items = [];
        this.state.fixturesByDay.map((fixturebyDay, i) => {
            items.push(
                <MatchResultWithDate fixturebyDay = {fixturebyDay} index={i} />
            );
        });
        return (
          <article id="fixtures">
            <h2 class="major">Lịch thi đấu</h2>
            <span class="image main"><img src="images/pic01.jpg" alt="" /></span>
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
                loader={loader} threshold="10">

                <table>
                    {items}
                </table>
            </InfiniteScroll>
          </article>
        );
      } else {

        return (
          <article id="fixtures" class="hidden">

          </article>
      );
    }

    }
}
export default Fixtures;
