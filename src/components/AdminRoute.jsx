import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRoute = ({ component: Component, loggedIn, isAdmin, ...rest }) => {
    return(
    <Route {...rest} render={props => (
        loggedIn?
            (isAdmin?
                <Component {...props} />
                :
                <Redirect to='/dashboard'/>
            ):(
                <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
            )
        )} 
    />
)}

export default connect(
    ({
        auth: {loggedIn, isAdmin}
    })=>({
        loggedIn,
        isAdmin
    })
)(AdminRoute)