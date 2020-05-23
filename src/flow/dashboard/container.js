import React, { Component } from 'react';
import Presenter from './presenter';
import routes from './routes';

class Screen extends Component {

    constructor(props) {
        super(props);
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
            <Presenter
                props={this.props}
                onToggled={this._onToggled}
                getRoutes={this._getRoutes}
            />
        );
    }
}
export default Screen;