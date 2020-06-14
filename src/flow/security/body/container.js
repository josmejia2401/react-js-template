import React, { Component } from 'react';
import Presenter from './presenter';
import routes from '../routes';

class Screen extends Component {

    constructor(props) {
        super(props);
    }

    _getRoutes = (e) => {
        return routes;
    }

    render() {
        return (
            <Presenter
                {...this.props}
                getRoutes={this._getRoutes}
            />
        );
    }
}
export default Screen;