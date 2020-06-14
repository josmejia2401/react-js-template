import React from 'react';
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

import LoadingIndicator from '../../indicator/index';
import BodyScreen from "./body";
 
import './style.css';

const Presenter = props => { 
    return (
        <div>
            <LoadingIndicator {...props} usePromiseTracker={usePromiseTracker} trackPromise={trackPromise}/>
            <BodyScreen {...props} usePromiseTracker={usePromiseTracker} trackPromise={trackPromise}/>
        </div>
    );
};
Presenter.propTypes = {};
export default Presenter;