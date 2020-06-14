import { connect } from 'react-redux';
import Screen from './container';
import * as services from './services/service';

let mapStateToProps = state => ({
    data: state.security.data
})

let mapDispatchToProps = dispatch => ({
    signIn: (data) => dispatch(services.signIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);