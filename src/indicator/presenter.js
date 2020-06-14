import React from 'react';
import './style.css';

const Presenter = props => {
    const { usePromiseTracker } = props;
    const { promiseInProgress } = usePromiseTracker();
    return promiseInProgress && (
        <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{ backgroundColor: "transparent", border: "none" }}>
                    <div className="modal-body">
                        <div className="d-flex justify-content-center">
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