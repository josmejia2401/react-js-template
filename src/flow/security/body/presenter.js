import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './style.css';

const Presenter = props => {
    const { getRoutes } = props;
    const routes = getRoutes();
    return (
        <div>
            <Switch>
                {
                    routes.map((val, ind) => {
                        if (!val.component) {
                            return null
                        }
                        return (<Route key={'route-sec-' + ind} path={val.path} render={() => <val.component {...props} />} />)
                    })
                }
            </Switch>
        </div>

    );
};
Presenter.propTypes = {};
export default Presenter;