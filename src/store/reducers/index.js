import * as actionTypes from '../actions/actionTypes'
const initialState = {

}

export const crudReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.GET_LIST:
            return payload.records
        case actionTypes.FIND_ONE:
            return payload.record
        case actionTypes.POST:
            return payload.record
        case actionTypes.UPDATE:
            return payload.record
        case actionTypes.ERROR:
            return payload.errorMsg

        default:
            return state
    }
}
