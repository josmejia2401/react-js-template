import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.css';

const Presenter = props => {
    const {  getRoutes } = props;
    const routes = getRoutes();

    return (
        <header>
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Compañía</div>
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
        </header>

    );
};
Presenter.propTypes = {};
export default Presenter;