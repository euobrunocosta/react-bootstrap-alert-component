import React, { Component } from 'react'

export default class Alert extends Component {
  render() {
    const { text, type } = this.props
    return (
      <div className={"alert alert-" + type}>
        {text}
      </div>
    )
  }
}
