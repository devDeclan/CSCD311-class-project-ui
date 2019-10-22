//REACT
import React from 'react';

//ROUTER
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

//REDUX
import { connect } from 'react-redux';
import { alertActions, profileActions } from './store/actions';

//VIEWS
import {
    AdminPages,
    AuthPages,
    StudentPages
} from './views';
import {
    AdminRoute,
    PrivateRoute
} from './components';

//SWEETALERT
import SweetAlert from 'sweetalert2';

//initialise router
export const history = createBrowserHistory();



class App extends React.Component{
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

    componentDidUpdate(){
        let { alert } = this.props;
        if(alert){
            SweetAlert.fire({
                toast: true,
                position: 'top-end',
                type: alert.type,
                title: alert.message,
                showConfirmButton: false,
                timer: 5000
            })
        }
    }

    render(){
        return (
            <>
                <Router history={history}>
                    <Redirect exact path="/" to="/admin"/>
                    <Route path="/auth" component={AuthPages} />
                    <PrivateRoute path="/dashboard" component={StudentPages} />
                    <AdminRoute path="/admin" component={AdminPages} />
                </Router>
            </>
        );
    }
}

export default connect(
    ({
        alert
    })=>({
        alert
    })
    , 
    {
        clearAlerts: alertActions.clear
    }
)(App);
