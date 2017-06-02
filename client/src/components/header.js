import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Categories from "../config";
import { fetchQuestions } from "../actions/action";
import { connect } from "react-redux";
import UserHistory from './userHistory';

import "./header.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.getQuestions = this.getQuestions.bind(this);
    this.showHistory = this.showHistory.bind(this);
    this.state = {
        showHistory: false
    };
  }

  getQuestions(event) {
    const category = event.target.value;
    //console.log('category is ' + category);
    this.props.dispatch(fetchQuestions(category));
    this.forceHideHistory();
  }

  forceHideHistory(){
    this.setState({
        showHistory: false
    });
  }

  showHistory(){
     this.setState({
         showHistory: !this.state.showHistory
     });
  }


  render() {
    const topics = Object.keys(Categories).map((topic, index) => (
      <li key={index} className="topic-item">
        <button
          className="topic-button pure-button"
          onClick={this.getQuestions}
          value={Categories[topic]}>
          {topic}
        </button>
      </li>
    ));

    let historyState = "";
    if(this.state.showHistory) {
        historyState = <UserHistory />
    }
    return (
      <section className="header">
        <h1><img src="img/cat-tied-icon.png" title="Cat" width="64" height="64"/> Quizical </h1>
        <ul id="topic-list">{topics}</ul>
        {historyState}
        {<button className="historyButton pure-button" onClick={this.showHistory}>UserHistory</button>}
      </section>
    );
  }
}

const mapStateToProps = (state)=>({
  scoreTotals: state.scoreTotals
})

export default connect(mapStateToProps)(Header);
