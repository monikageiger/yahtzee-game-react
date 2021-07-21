import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
    this.func1 = this.func1.bind(this);
  }
  func1(e){
    console.log("disabled")
    this.setState(st=>({disabled:true}))
  }
  render() {
    const { scores, doScore } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} disabled={this.state.disabled} func1={this.func1}/>
              <RuleRow name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Four of Kind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Full House" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Small Straight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Large Straight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
              <RuleRow name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} disabled={this.state.disabled} onClick={this.func1}/>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
}

export default ScoreTable;