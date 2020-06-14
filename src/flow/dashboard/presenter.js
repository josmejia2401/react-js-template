import React from 'react';
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

import LoadingIndicator from '../../indicator/index';
import HeaderScreen from "./header";
import SideBarScreen from "./sidebar";
import BodyScreen from "./body";

import './style.css';

const Presenter = props => { 
    return (
        <div className="d-flex" id="wrapper">
            <LoadingIndicator {...props} usePromiseTracker={usePromiseTracker} trackPromise={trackPromise}/>
            <SideBarScreen {...props} usePromiseTracker={usePromiseTracker} trackPromise={trackPromise}></SideBarScreen>
            <div id="page-content-wrapper">
                <HeaderScreen {...props} usePromiseTracker={usePromiseTracker} trackPromise={trackPromise}></HeaderScreen>
                <BodyScreen {...props} usePromiseTracker={usePromiseTracker} trackPromise={trackPromise}></BodyScreen>
            </div>
        </div>
    );
};
Presenter.propTypes = {};
export default Presenter;