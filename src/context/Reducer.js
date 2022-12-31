import * as actionTypes from './constants';

const Reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.LOGIN_START:
            return {
                user: null,
                isFetching: true,
                error: false
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                user: payload,
                isFetching: false,
                error: false
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                user: null,
                isFetching: false,
                error: true
            };
        case actionTypes.LOGOUT:
            return {
                user: null,
                isFetching: false,
                error: false
            };
        default:
            return state
    }
}
export default Reducer