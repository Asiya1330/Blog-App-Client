import * as actionTypes from './constants'
export const LoginStart = (userCredentials) => ({
    type: actionTypes.LOGIN_START
})

export const LoginSuccessfull = (user) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: user
})

export const LoginFailure = () => ({
    type: actionTypes.LOGIN_FAILURE
})

export const Logout = () => ({
    type: actionTypes.LOGOUT
})


export const UpdatePostModal = () => ({
    type: actionTypes.UPDATE_POST_MODAL,
    payload: true
})


