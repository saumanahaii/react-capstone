import React from "react";
import Categories from "../config";
import { fetchQuestions } from "../actions/action";
import { connect } from "react-redux";
import "velocity-animate";
import  'velocity-ui-pack';
import {VelocityComponent} from "velocity-react"
import UserHistory from './userHistory';

import $ from 'jquery';

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


//Calls the fetchQuestion action to fetch questions from the API according to the category clicked
  getQuestions(event) {
    const category = event.target.value;
    this.props.dispatch(fetchQuestions(category));
     $('.score-container').hide();
     $('.submit-button').show();
  }

//Toggles the User History
  showHistory(){
     this.setState({
         showHistory: !this.state.showHistory
     });
  }




  render() {
    console.log('logging the header')
//Maps through the Categories object to make a button for each of them
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
// if true shows UserHistory component, else shows nothing.
    let historyState = "";
    if(this.state.showHistory) {
      historyState = <UserHistory />
    }
    return (
      <VelocityComponent animation={{duration: 800, animation: {"rotateX": [90, 'spring']}}}>
      <section className="header">
        <h1><img alt="" src="img/cat-tied-icon.png" title="Cat" width="64" height="64"/> Quizical </h1>
        <ul id="topic-list">{topics}</ul>

        {historyState}

        {<button className="historyButton pure-button" onClick={this.showHistory}>UserHistory</button>}
      </section>
      </VelocityComponent>
    );
  }
}

const mapStateToProps = (state)=>({
  scoreTotals: state.scoreTotals
})

export default connect(mapStateToProps)(Header);
