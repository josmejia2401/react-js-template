import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import App from '../flow/dashboard/index'
import './App.css';
import logo from '../logo.svg';

function PreLoading() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



class Appx extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
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

  render() {
    return this.state.isLoading ? PreLoading() : (
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={App} />
          <Redirect from={'/'} to={'/admin/dashboard'} />
        </Switch>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = state => ({})
let mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Appx);