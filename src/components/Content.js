import React, { Component } from 'react';
import LoginBox from './LoginBox'
import ActivityLog from './ActivityLog'

class Content extends Component {

  render() {
    if (this.props.page === 'loginbox') {
      return (
        <div className="container">
          <LoginBox login={this.props.login} />
        </div>
      );
    } else {
      return (
        <div className="container">
          <ActivityLog />
        </div>
      );
    }
  }
}

export default Content;
