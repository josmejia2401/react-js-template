import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import './style.css';

const Presenter = props => {
    const { promiseInProgress } = usePromiseTracker();
    return promiseInProgress && (
        <div aria-modal="true" style="display: block; padding-right: 15px;"
            aria-labelledby="exampleModalCenterTitle" role="dialog"
            tabindex="-1" id="exampleModalCenter" className="modal fade show"
            style={{ backgroundColor: 'rgba(0, 0, 0, .05)' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="text-center" style={{backgroundColor: 'transparent', border: 'none'}}>
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
Presenter.propTypes = {};
export default Presenter;