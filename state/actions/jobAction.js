import axiosConfig from "../../config/axios";
import {
    GET_ACTIVE_JOBS,
    GET_ACTIVE_JOBS_ERROR,
    GET_ACTIVE_JOBS_SUCCESS,
    GET_ALL_JOBS,
    GET_ALL_JOBS_ERROR,
    GET_ALL_JOBS_SUCCESS,
    GET_DECLINED_JOBS,
    GET_DECLINED_JOBS_ERROR,
    GET_DECLINED_JOBS_SUCCESS,
    GET_JOB_DETAILS, GET_JOB_DETAILS_ERROR,
    GET_JOB_DETAILS_SUCCESS,
    GET_PENDING_JOBS,
    GET_PENDING_JOBS_ERROR,
    GET_PENDING_JOBS_SUCCESS,
    GET_REJECTED_JOBS,
    GET_REJECTED_JOBS_ERROR,
    GET_REJECTED_JOBS_SUCCESS,
    GET_SCHEDULED_JOBS,
    GET_SCHEDULED_JOBS_ERROR,
    GET_SCHEDULED_JOBS_SUCCESS
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

export const getActiveJobs = async (dispatch, page, per) => {
    dispatch({
        type: GET_ACTIVE_JOBS
    })
    try {
        return await axiosConfig
            .get(`/admin-api/filter-jobs?service_status=active&page=${page}&per=${per}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_ACTIVE_JOBS_SUCCESS,
                    active_list: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_ACTIVE_JOBS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const getRejectedJobs = async (dispatch, page, per) => {
    dispatch({
        type: GET_REJECTED_JOBS
    })
    try {
        return await axiosConfig
            .get(`/admin-api/filter-jobs?service_status=rejected&page=${page}&per=${per}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_REJECTED_JOBS_SUCCESS,
                    rejected_list: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_REJECTED_JOBS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const getScheduledJobs = async (dispatch, page, per) => {
    dispatch({
        type: GET_SCHEDULED_JOBS
    })
    try {
        return await axiosConfig
            .get(`/admin-api/filter-jobs?scheduled=true&page=${page}&per=${per}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_SCHEDULED_JOBS_SUCCESS,
                    scheduled_list: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_SCHEDULED_JOBS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const getDeclinedJobs = async (dispatch, page, per) => {
    dispatch({
        type: GET_DECLINED_JOBS
    })
    try {
        return await axiosConfig
            .get(`/admin-api/filter-jobs?service_status=declined&page=${page}&per=${per}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_DECLINED_JOBS_SUCCESS,
                    declined_list: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_DECLINED_JOBS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const getJobDetails = async (dispatch, jobID) => {
    dispatch({
        type: GET_JOB_DETAILS
    })
    try {
        return await axiosConfig
            .get(`/admin-api/get-job-details/${jobID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_JOB_DETAILS_SUCCESS,
                    job: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_JOB_DETAILS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};