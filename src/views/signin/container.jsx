import React, { Component } from 'react';
import Presenter from './presenter';

class Screen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //const { datasets } = this.chartLineRef.chartInstance.data
        //console.log(datasets[0].data);
    }

    state = {
        formSignIn: {
            username: {
                value: '',
                error: ''
            },
            password: {
                value: '',
                error: ''
            },
            keepSession: {
                value: false,
                error: ''
            }
        }
    }

    _signIn = (e) => {
        const { formSignIn } = this.state;
        console.log(formSignIn);
        if (formSignIn.username.error || !formSignIn.username.value) {
            formSignIn.username.error = true;
            this.setState({ formSignIn: formSignIn });
            return;
        } else if (formSignIn.password.error || !formSignIn.password.value) {
            formSignIn.password.error = true;
            this.setState({ formSignIn: formSignIn });
            return;
        }
        const data = {
            username: formSignIn.username.value,
            password: formSignIn.password.value
        }
        const { trackPromise } = this.props;
        trackPromise(this.props.signIn(data).then(result => {
            this._signSuccessful(result);
        }).catch(error => {
            var errMessage = "";
            if (error instanceof Error) {
                errMessage = error.message;
            } else {
                errMessage = error;
            }
            this.props.addNotification(null, 'INICIO DE SESIÓN', errMessage, "error")
            console.log(error);
        }));
    }

    _signSuccessful = (data) => {
        this.props.addNotification(null, 'INICIO DE SESIÓN', 'exitoso')
        /*if (data) {
            setTimeout(function () {
                window.location.reload(true);
            }, 1000);  
        }*/
    }

    _updateInputValue = (e, key) => {
        const error = e.target.value ? false : true;
        const { formSignIn } = this.state;
        switch (key) {
            case 'username':
                formSignIn.username.value = e.target.value;
                formSignIn.username.error = error;
                this.setState({ formSignIn: formSignIn });
                break;
            case 'password':
                formSignIn.password.value = e.target.value;
                formSignIn.password.error = error;
                this.setState({ formSignIn: formSignIn });
                break;
            case 'keepSession':
                formSignIn.keepSession.value = !formSignIn.keepSession.value;
                formSignIn.keepSession.error = error;
                this.setState({ formSignIn: formSignIn });
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <Presenter
                {...this.props}
                formSignIn={this.state.formSignIn}
                signIn={this._signIn}
                updateInputValue={this._updateInputValue}
            />
        );
    }
}
export default Screen;