import axios from 'axios';
import * as actionTypes from './actionTypes'

const baseUrl = 'http://localhost:3001/api';

export const getList = (payload) => async (dispatch) => {
    try {
        const records = await axios.get(`${baseUrl}/${payload.module}`);
        dispatch({ action: actionTypes.GET_LIST, payload: { records, count, success } })
    } catch (e) {
        dispatch({ action: actionTypes.ERROR, payload: { errorMsg: e } })
        console.log(e)
    }
}

export const deleteOne = (payload) => async (dispatch) => {
    try {
        await axios.get(`${baseUrl}/${payload.module}`);
        dispatch({ action: actionTypes.DELETE_ONE, payload: { record, success } })
    } catch (e) {
        dispatch({ action: actionTypes.ERROR, payload: { errorMsg: e } })
        console.log(e)
    }
}

export const getOne = (payload) => async (dispatch) => {
    try {
        const record = await axios.get(`${baseUrl}/${payload.module}`);
        dispatch({ action: actionTypes.FIND_ONE, payload: { record, success } })
    } catch (e) {
        dispatch({ action: actionTypes.ERROR, payload: { errorMsg: e } })
        console.log(e)
    }
}

export const updateOne = (payload) => async (dispatch) => {
    try {
        const updatedRecord = await axios.get(`${baseUrl}/${payload.module}`);
        dispatch({ action: actionTypes.UPDATE, payload: { updatedRecord, success } })
    } catch (e) {
        dispatch({ action: actionTypes.ERROR, payload: { errorMsg: e } })
        console.log(e)
    }
}

export const post = (payload) => async (dispatch) => {
    try {
        const newRecord = await axios.get(`${baseUrl}/${payload.module}`);
        dispatch({ action: actionTypes.POST, payload: { newRecord, count } })
    } catch (e) {
        dispatch({ action: actionTypes.ERROR, payload: { errorMsg: e } })
        console.log(e)
    }
}

