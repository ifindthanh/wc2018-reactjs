import React, { Component } from 'react';
import './App.css';
import Article from './Article.js';
import MatchResult from './MatchResult.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {article: '', todayMatchs: []};
  }

  showArticle(id){
    this.setState({article: id});
  }

  componentDidMount(){
    fetch(`/todayMatch`)
    .then(data => data.json())
		.then((result) => {

      this.setState({
        "todayMatchs": result.result.fixtures
      })
		});
  }

  render() {
    return (
      <div id="wrapper">

          <header id="header">
            <div class="logo">
              <span class="icon fa-diamond"></span>
            </div>
            <div class="content">
              <div class="inner">
                <h1>Russia 2018</h1>
                <table>
                  {
                    this.state.todayMatchs.map((fixture, i) =>
                      <MatchResult fixture = {fixture} index={i} />
                    )
                  }
                </table>
              </div>
            </div>
            <nav>
              <ul>
                <li><a onClick={this.showArticle.bind(this, "bxh")} href="#bxh">BXH</a></li>
                <li><a onClick={this.showArticle.bind(this, "fixtures")} href="#fixtures">Trận</a></li>
                <li><a onClick={this.showArticle.bind(this, "about")} href="#about">About</a></li>
                <li><a onClick={this.showArticle.bind(this, "contact")} href="#contact">Contact</a></li>
              </ul>
            </nav>
          </header>



          <Article selected= {this.state.article}/>


          <footer id="footer">
            <p class="copyright">&copy; Thanhnd. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
          </footer>

      </div>
    );
  }
}

export default App;
