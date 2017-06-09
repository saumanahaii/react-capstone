import React from 'react';
import {connect} from 'react-redux';
import Velocity from "velocity-animate";
import  'velocity-ui-pack';

export class UserHistory extends React.Component {

  componentDidMount(){
    Velocity(document.getElementById("resultHolder"),"transition.fadeIn",{stagger: 50});
  }

  componentWillLeave(callback){
    return Velocity(document.getElementById("resultItem"),"transition.slideDownOut",{stagger: 50}).then(callback);
  }

  component

  render() {
    console.log('rendered!!');
    const results = Object.keys(this.props.scoreTotals).map((item, index) => {
      let quizPercentage = this.props.scoreTotals[item][0] / this.props.scoreTotals[item][1];
      return<div className='resultItem' key={index}>
              <h2>{item}</h2>
              <p><b>{(quizPercentage * 100).toFixed(0) }%</b> or <b>{this.props.scoreTotals[item][0]}/{this.props.scoreTotals[item][1]}</b> questions</p>
            </div>
    });

return (
    <div id="resultHolder">
      {results}
    </div>

)
    }
}



const mapStateToProps = state => ({
  scoreTotals: state.scoreTotals,
  scoreTracker: state.scoreTracker
});

export default connect(mapStateToProps)(UserHistory);
