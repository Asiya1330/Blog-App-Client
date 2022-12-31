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


        case actionTypes.FETCH_POSTS:
            return {
                posts: action.posts,
                isFetching: false,
                error: false
            };
        // case actionTypes.REGISTER_SUCCESS:
        //     return {
        //         user: payload,
        //         isFetching: false,
        //         error: false
        //     };
        // case actionTypes.REGISTER_FAILURE:
        //     return {
        //         user: null,
        //         isFetching: false,
        //         error: true
        //     };


        default:
            return state
    }
}


export default Reducer