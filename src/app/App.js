import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NotificationSystem from 'react-notification-system';

import { connect } from 'react-redux';
import App from '../flow/dashboard/index'
import Security from '../flow/security/index'

import './App.css';
import logo from '../logo.svg';

function PreLoading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>car<code>GAN</code>go</p>
        <a className="App-link">Haciendo cosas increíbles</a>
      </header>
    </div>
  );
}



class Appx extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true, notificationSystem: React.createRef(), }
  }

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ isLoading: false }), 300);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  addNotification = (e, title = "", message = "", level = "info", position = "tr", autoDismiss = 5) => {
    //level success, error, warning and info
    if (e) {
      e.preventDefault();
    }
    const notification = this.state.notificationSystem.current;
    notification.addNotification({
      title: title,
      message: message,
      level: level,
      position: position,
      autoDismiss: autoDismiss
    });
  };



  render() {
    const token = this.getCookie("token");
    console.log(token, this.props);
    return this.state.isLoading ? PreLoading() : (
      <div>
        <NotificationSystem ref={this.state.notificationSystem} />
        <BrowserRouter>
          <Switch>
            {this.props.data && token && <Route path="/admin"
              component={() => <App getCookie={this.getCookie} addNotification={this.addNotification.bind(this)} />} />
            }
            {this.props.data && token && <Redirect from={'/'} to={'/admin/dashboard'} />}


            {(!this.props.data || !token) && <Route path="/security"
              component={() => <Security getCookie={this.getCookie} addNotification={this.addNotification.bind(this)} />} />}
            {(!this.props.data || !token) && <Redirect from={'/'} to={'/security/sign-in'} />}

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  data: state.security.data
})
let mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Appx);