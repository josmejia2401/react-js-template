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

    _getCurrentNameView = (eh) => {
        const path = window.location.pathname;
        const route = routes.filter(function(i) {
            return i.path === path
        })
        if (route && route.length>0) {
            return route[0].name
        } else {
            return "";
        }
        
    }
    render() {
        return (
            <Presenter
                props={this.props}
                getRoutes={this._getRoutes}
                getCurrentNameView={this._getCurrentNameView}
            />
        );
    }
}
export default Screen;