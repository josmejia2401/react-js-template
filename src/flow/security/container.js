import React, { Component } from 'react';


import Presenter from './presenter';
import routes from './routes';

class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      promiseLoading: {
        value: null
      }
    }
  }

  _onToggled = (e) => {
    var toggled = document.getElementById("wrapper");
    toggled.classList.toggle("toggled");
  }

  _getRoutes = (e) => {
    return routes;
  }

  render() {
    return (
      <div>
        <Presenter
          {...this.props}
          onToggled={this._onToggled}
          getRoutes={this._getRoutes}
          promiseLoading={this.state.promiseLoading}
        />
      </div>

    );
  }
}
export default Screen;