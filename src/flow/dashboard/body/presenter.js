import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './style.css';

const Presenter = props => {
    const { getRoutes, getCurrentNameView } = props;
    const routes = getRoutes();
    return (
        <div className="container-fluid">
            <h1 className="mt-4">{getCurrentNameView()}</h1>
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

    );
};
Presenter.propTypes = {};
export default Presenter;