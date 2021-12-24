import axiosConfig from "../../config/axios";
import {
    GET_ALL_JOBS,
    GET_ALL_JOBS_ERROR,
    GET_ALL_JOBS_SUCCESS,
    GET_PENDING_JOBS, GET_PENDING_JOBS_ERROR,
    GET_PENDING_JOBS_SUCCESS
} from "../dispatchTypes";

export const getAllJobs = async (dispatch, page, per) => {
    dispatch({
        type: GET_ALL_JOBS
    })
    try {
        return await axiosConfig
            .get(`/admin-api/filter-jobs?page=${page}&per=${per}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_ALL_JOBS_SUCCESS,
                    job_list: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_ALL_JOBS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
 };

export const getPendingJobs = async (dispatch, page, per) => {
    dispatch({
        type: GET_PENDING_JOBS
    })
    try {
        return await axiosConfig
            .get(`/admin-api/filter-jobs?service_status=pending&page=${page}&per=${per}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_PENDING_JOBS_SUCCESS,
                    pending_list: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_PENDING_JOBS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

