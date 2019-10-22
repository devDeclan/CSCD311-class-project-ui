import { authConstants } from '../constants';
import { authService } from '../services';
import { alertActions, stateActions } from '../actions';
import { history } from '../../App';
import SweetAlert from 'sweetalert2';
import profileActions from './profile.actions';

export default {
    login,
    logout,
    register,
    resetPassword
};

function login(data) {
    console.log(data);
    return dispatch => {
        dispatch(stateActions.running());

        authService.login(data)
            .then(({data}) => {
                if(!data.success){
                    console.log("data",data)
                    dispatch(failure());
                    dispatch(alertActions.error(data.message))
                }else{
                    let {user: {student_id, isAdmin, pin, profile }} = data;
                    dispatch(success(student_id, isAdmin));
                    dispatch(profileActions.setProfile(profile));
                    history.push('/dashboard');
                    dispatch(alertActions.success("Login successful"))
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                console.log("error",error)
                dispatch(failure());
                dispatch(alertActions.error("Login unsuccessful"))
                dispatch(stateActions.idle());
            })
    };
    function success(student_id, isAdmin) { return { type: authConstants.LOGIN, student_id, isAdmin } }
    function failure() { return { type: authConstants.LOGOUT } }
}

function logout(next) {
    return dispatch => {
        SweetAlert.fire({
            title: 'Are you sure?',
            text: "You are already logged in. Do you want to logout?",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
        }).then((result) => {
            if (result.value) {
                dispatch(success());
                dispatch(profileActions.removeProfile())
                dispatch(alertActions.success("Logged out"))
                history.push('/auth');
            }else{
                history.push(next);
                dispatch(alertActions.success("Logout cancelled"))
            }
        })
    }
    function success() { return { type: authConstants.LOGOUT } }
}

function register(data) {
    return dispatch => {
        dispatch(stateActions.running());

        authService.register(data)
            .then(({data}) => {
                if(!data.success){
                    dispatch(failure());
                    dispatch(alertActions.error("Registration unsuccessful"))
                }else{
                    let {user: {id_number, isAdmin, _id}} = data.data;
                    dispatch(success(id_number, isAdmin));
                    dispatch(profileActions.getProfile(_id));
                    history.push('/dashboard');
                    dispatch(alertActions.success("Registration successful"))
                }
                dispatch(stateActions.idle());
            })
            .catch((error) => {
                console.log(error)
                dispatch(failure());
                dispatch(alertActions.error("Registration unsuccessful"))
                dispatch(stateActions.idle());
            })
    };

    function success(id_number, isAdmin) { return { type: authConstants.LOGIN, id_number, isAdmin } }
    function failure() { return { type: authConstants.LOGOUT } }
}

function resetPassword(password, token) {
    return dispatch => {
        dispatch(stateActions.running());

        authService.resetPassword(password, token)
            .then(
                ()=>{
                    history.push('/auth/login');
                    dispatch(alertActions.success("Password reset successful"));
                    dispatch(stateActions.idle());
                },
                (error)=>{
                    dispatch(alertActions.error("Password reset unsuccessful"));
                    dispatch(stateActions.idle());
                }
            )
    }
}