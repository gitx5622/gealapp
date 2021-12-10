import axiosConfig from '../../config/axios';
import {
    APPROVE_SERVICEMAN, APPROVE_SERVICEMAN_ERROR, APPROVE_SERVICEMAN_SUCCESS,
    GET_ALL_SERVICEMEN,
    GET_ALL_SERVICEMEN_ERROR,
    GET_ALL_SERVICEMEN_SUCCESS,
    GET_SERVICEMAN,
    GET_SERVICEMAN_ERROR,
    GET_SERVICEMAN_SUCCESS,
    REJECT_SERVICEMAN,
    REJECT_SERVICEMAN_ERROR,
    REJECT_SERVICEMAN_SUCCESS
} from "../dispatchTypes";

export const getAllServicemen = async (dispatch) => {
    dispatch({
        type: GET_ALL_SERVICEMEN,
    });
    try {
        return await axiosConfig
            .get(`/admin-api/filter-servicemen-registrations`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                dispatch({
                    type: GET_ALL_SERVICEMEN_SUCCESS,
                    servicemen: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_ALL_SERVICEMEN_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};

export const getServiceman = async (dispatch, servicemanUserID) => {
    dispatch({
        type: GET_SERVICEMAN,
    });
    try {
        return await axiosConfig
            .get(`/admin-api/get-serviceman/${servicemanUserID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                dispatch({
                    type: GET_SERVICEMAN_SUCCESS,
                    serviceman: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_SERVICEMAN_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};

export const approveServiceman = async (dispatch, servicemanUserID) => {
    dispatch({
        type: APPROVE_SERVICEMAN,
    });
    try {
        return await axiosConfig
            .put(`/admin-api/approve-serviceman/${servicemanUserID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                dispatch({
                    type: APPROVE_SERVICEMAN_SUCCESS,
                    approved_serviceman: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: APPROVE_SERVICEMAN_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};

export const rejectServiceman = async (dispatch, servicemanUserID) => {
    dispatch({
        type: REJECT_SERVICEMAN,
    });
    try {
        return await axiosConfig
            .put(`/admin-api/reject-serviceman/${servicemanUserID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                dispatch({
                    type: REJECT_SERVICEMAN_SUCCESS,
                    rejected_serviceman: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: REJECT_SERVICEMAN_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};