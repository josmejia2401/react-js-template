import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom'
import LoadingIndicator from '../../indicator/index';
import './style.css';

const Presenter = props => {
    const { onToggled, getRoutes } = props;
    const routes = getRoutes();

    return (
        <div className="d-flex" id="wrapper">
            <LoadingIndicator/>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Start Bootstrap </div>
                <div className="list-group list-group-flush">
                    {
                        routes.map((val, ind) => {
                            return (<NavLink
                                className="list-group-item list-group-item-action bg-light"
                                key={'navlink-' + ind}
                                to={val.path}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                isActive={(match, location) => {
                                    if (!match) {
                                        return false;
                                    }
                                    return true;
                                }}>{val.name}</NavLink>)
                        })
                    }
                </div>
            </div>


            <div id="page-content-wrapper">

                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <button className="btn btn-primary" id="menu-toggle" onClick={(e) => onToggled(e)}>Toggle Menu</button>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
              </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container-fluid">
                    <Switch>
                        {
                            routes.map((val, ind) => {
                                if (!val.component) {
                                    return null
                                }
                                return (<Route key={'route-' + ind} path={val.path} render={props => <val.component {...props} />} />)
                            })
                        }
                    </Switch>
                </div>
            </div>
        </div>
    );
};
Presenter.propTypes = {};
export default Presenter;