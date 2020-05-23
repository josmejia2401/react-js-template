import React from 'react';
import LoadingIndicator from '../../indicator/index';
import HeaderScreen from "./header";
import SideBarScreen from "./sidebar";
import BodyScreen from "./body";

import './style.css';

const Presenter = props => {
    return (
        <div className="d-flex" id="wrapper">
            <LoadingIndicator {...props} />
            <SideBarScreen {...props}></SideBarScreen>
            <div id="page-content-wrapper">
                <HeaderScreen {...props}></HeaderScreen>
                <BodyScreen {...props}></BodyScreen>
            </div>
        </div>
    );
};
Presenter.propTypes = {};
export default Presenter;