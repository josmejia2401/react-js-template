import React from 'react';
import './style.css';

const Presenter = props => {
    const { onToggled, onToggledMenuUser, } = props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <i className="material-icons md-48" onClick={(e) => onToggled(e)}>menu</i>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">


                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" onClick={(e) => onToggledMenuUser(e)} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Usuario</a>
                        <div className={"dropdown-menu dropdown-menu-right "} id="navbarDropMenuUser" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Acción 1</a>
                            <a className="dropdown-item" href="#">Acción 2</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Cerrar sesión</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
Presenter.propTypes = {};
export default Presenter;