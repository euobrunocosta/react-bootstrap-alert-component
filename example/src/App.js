import React, { Component } from 'react'

import Alert from 'react-bootstrap-alert'

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="container p-3">
          <Alert text='Bootstrap Alert' type='info' />
        </div>
      </div>
    )
  }
}
