import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
     render() {
    return (
      <tr className= {this.props.disabled ? "RuleRow RuleRow-disabled" : "RuleRow RuleRow-active"} onClick={this.props.doScore,this.props.func1}>
        <td className="RuleRow-name" >{this.props.name} </td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
    }

export default RuleRow;