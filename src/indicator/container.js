import React, { Component } from 'react';
import Presenter from './presenter';

class Screen extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Presenter
                {...this.props}
            />
        );
    }
}
export default Screen;