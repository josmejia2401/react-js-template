import React from 'react';
import './style.css';

const Presenter = props => {
    const { signIn, updateInputValue, formSignIn } = props;
    const year = new Date().getFullYear();

    return (
        <div className="content">
            <div className="row">
                <div className="container-fluid" style={{ margin: "none", padding: 0, width: "100vw", height: "100vh" }}>
                    <div className="card" style={{ height: "100vh", border: "none" }}>
                        <div className="row d-flex" style={{ height: "95vh" }}>
                            <div className="col-lg-6 justify-content-center align-self-center">
                                <div className="card1">
                                    <div className="row justify-content-center border-line">
                                        <img src="https://img2.freepng.es/20180303/rlq/kisspng-computer-programming-software-code-business-inform-typing-keyboard-5a9aa19d066ba4.9761980515200833570263.jpg" className="image" /> </div>
                                </div>
                            </div>
                            <div className="col-lg-6 justify-content-center align-self-center">
                                <div className="card px-4 py-5" style={{ border: "none" }}>
                                    <div className="row mb-4 px-3">
                                        <h2 className="mb-0 mr-4 mt-2" style={{ width: "100%", textAlign: "center" }}>JOX Services</h2>
                                    </div>
                                    {/*<div className="row mb-4 px-3">
                                        <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                        <div className="facebook text-center mr-3">
                                            <div className="fa fa-facebook"></div>
                                        </div>
                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div className="line"></div>
                                        <small className="or text-center">Or</small>
                                        <div className="line"></div>
                                    </div>
                                    */}
                                    <div className="row mb-4 px-3">
                                        <h4 className="mb-0 mr-4 mt-2">Iniciar sesión</h4>
                                    </div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Usuario</h6>
                                        </label>
                                        <input className="mb-4" type="text" name="username" placeholder="Ingresar un usuario valido"
                                            value={formSignIn.username.value} 
                                            onChange={(e) => updateInputValue(e, 'username')} className="form-control form-control-sm"
                                            required />
                                        {
                                            formSignIn.username.error &&
                                            (<div className="invalid-feedback is-invalid" style={{ display: 'block', marginBottom: '15px' }}>Por favor ingrese el usuario.</div>)
                                        }
                                    </div>
                                    <div className="row px-3">
                                        <label className="mb-1">
                                            <h6 className="mb-0 text-sm">Contraseña</h6>
                                        </label>
                                        <input type="password" name="password" placeholder="Ingresar la contraseña"
                                            value={formSignIn.password.value} 
                                            onChange={(e) => updateInputValue(e, 'password')} className="form-control form-control-sm"
                                            required />
                                        {
                                            formSignIn.password.error &&
                                            (<div className="invalid-feedback is-invalid" style={{ display: 'block', marginBottom: '15px' }}>Por favor ingrese la contraseña.</div>)
                                        }
                                    </div>
                                    <div className="row px-3 mb-4">
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input id="chk1" type="checkbox" name="chk" className="custom-control-input"
                                                value={formSignIn.keepSession.value} onChange={(e) => updateInputValue(e, 'keepSession')}
                                            />
                                            <label htmlFor="chk1" className="custom-control-label text-sm">Mantener sesión</label> </div>
                                        <a href="#" className="ml-auto mb-0 text-sm">Olvidaste la contraseña?</a>
                                    </div>
                                    <div className="row mb-3 px-3">
                                        <button type="submit" className="btn btn-blue text-center" onClick={(e) => signIn(e)}>Iniciar sesión</button>
                                    </div>
                                    <div className="row mb-4 px-3"> <small className="font-weight-bold">No tienes cuenta? <a className="text-danger ">Registrarse</a></small> </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue row" style={{ height: "5vh", textAlign: "center" }}>
                            <div className="col-12 primary-color">
                                <div>Copyright &copy; {year}. All rights reserved.</div>
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