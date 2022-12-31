import * as actionTypes from './constants'
export const LoginStart = (userCredentials) => ({
    type: actionTypes.LOGIN_START
})

export const LoginSuccessfull = (user) => ({
    type: actionTypes.LOGIN_SUCCESS,
    payload: user
})

export const LoginFailure = () => ({
    tyep: actionTypes.LOGIN_FAILURE
})

export const Logout = () => ({
    tyep: actionTypes.LOGOUT
})

