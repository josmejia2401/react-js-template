import React, { Component } from 'react';
import Presenter from './presenter';

class Screen extends Component {

    constructor(props) {
        super(props);
    }

    _onToggled = (e) => {
        var toggled = document.getElementById("wrapper");
        toggled.classList.toggle("toggled");
    }

    _onToggledMenuUser = (e) => {
        var toggled = document.getElementById("navbarDropMenuUser");
        toggled.classList.toggle("view-menu-user");
    }
    render() {
        return (
            <Presenter
                props={this.props}
                onToggled={this._onToggled}
                onToggledMenuUser={this._onToggledMenuUser}
            />
        );
    }
}
export default Screen;