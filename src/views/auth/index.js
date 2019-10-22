import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage } from './pages';
import { authActions } from '../../store/actions';

class AuthPages extends React.Component {
    constructor(props){
        super(props);
        this.loggedIn = this.props.loggedIn;
        let { logout } = this.props;
        if(this.loggedIn){
            logout('/dashboard')
        }
    }
    
    render() {
        return (
            <Switch>
                <Redirect exact={true} from='/auth' to="/auth/login"/>
                <Route path="/auth/login" exact={true} component={LoginPage}/>
                <Route path="/auth/register" exact={true} component={RegisterPage}/>
            </Switch>
        );
    }
}

export default connect(
    ({
        auth: {loggedIn}
    })=>({
        loggedIn
    })
,{
    logout: authActions.logout
}
)(AuthPages);
