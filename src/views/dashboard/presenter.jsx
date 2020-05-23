import React from 'react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import './style.css';

const Presenter = props => {
    const {data, dataPie, chartLineRef} = props;
    return (

        <div className="content">
            <div className="row">
                <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">Conv. t</h5>
                                    <span className="h2 font-weight-bold mb-0">0</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-sm">
                                <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 0.00%</span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">Conv. mes</h5>
                                    <span className="h2 font-weight-bold mb-0">0</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-sm">
                                <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 0.00%</span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">Conv. día</h5>
                                    <span className="h2 font-weight-bold mb-0">0</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-sm">
                                <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 0.00%</span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>


                <div className="col-xl-3 col-md-6">
                    <div className="card card-stats">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <h5 className="card-title text-uppercase text-muted mb-0">bots</h5>
                                    <span className="h2 font-weight-bold mb-0">0/5</span>
                                </div>
                                <div className="col-auto">
                                    <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow">
                                        <i className=""></i>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 mb-0 text-sm">
                                <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 0.00%</span>
                                <span className="text-nowrap">Since last month</span>
                            </p>
                        </div>
                    </div>
                </div>



            </div>

            <div className="row">
                <div className="col-xl-6 col-md-6 col-6">
                    <Line height={100} ref={chartLineRef} data={data} />
                </div>

                <div className="col-xl-6 col-md-6 col-6">
                    <Bar height={100} data={data} />
                </div>
            </div>


            <div className="row">
                <div className="col-xl-6 col-md-6 col-6">
                    <Doughnut height={100} data={dataPie} />
                </div>

                <div className="col-xl-6 col-md-6 col-6">
                    <Pie height={100} data={dataPie} />
                </div>
            </div>
        </div>
    );
};
Presenter.propTypes = {};
export default Presenter;