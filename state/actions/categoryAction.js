import axiosConfig from "../../config/axios";
import {
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR,
    GET_CATEGORIES_SUCCESS,
    GET_SERVICES,
    GET_SERVICES_ERROR,
    GET_SERVICES_SUCCESS,
    GET_SUB_CATEGORY_AND_SERVICES,
    GET_SUB_CATEGORY_AND_SERVICES_ERROR,
    GET_SUB_CATEGORY_AND_SERVICES_SUCCESS,
    UPDATE_CATEGORY_STATUS,
    UPDATE_CATEGORY_STATUS_ERROR,
    UPDATE_CATEGORY_STATUS_SUCCESS,
    UPDATE_SERVICES_STATUS,
    UPDATE_SERVICES_STATUS_ERROR,
    UPDATE_SERVICES_STATUS_SUCCESS,
    UPDATE_SUB_CATEGORY_STATUS,
    UPDATE_SUB_CATEGORY_STATUS_ERROR,
    UPDATE_SUB_CATEGORY_STATUS_SUCCESS,
} from "../dispatchTypes";

export const getCategories = async (dispatch) => {
    dispatch({
        type: GET_CATEGORIES
    })
    try {
        return await axiosConfig
            .get(`/admin-api/categories`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_CATEGORIES_SUCCESS,
                    categories: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_CATEGORIES_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const updateCategoryStatus = async (dispatch, categoryID) => {
    dispatch({
        type: UPDATE_CATEGORY_STATUS
    })
    try {
        return await axiosConfig
            .put(`/admin-api/update-category-status/${categoryID}`, {},{
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: UPDATE_CATEGORY_STATUS_SUCCESS,
                    updated_category: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: UPDATE_CATEGORY_STATUS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const getSubCategoriesAndServices = async (dispatch, subCategoryID) => {
    dispatch({
        type: GET_SUB_CATEGORY_AND_SERVICES
    })
    try {
        return await axiosConfig
            .get(`/admin-api/sub-categories/${subCategoryID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_SUB_CATEGORY_AND_SERVICES_SUCCESS,
                    sub_categories: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_SUB_CATEGORY_AND_SERVICES_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const updateSubCategoryAndServices = async (dispatch, subCategoryID) => {
    dispatch({
        type: UPDATE_SUB_CATEGORY_STATUS
    })
    try {
        return await axiosConfig
            .put(`/admin-api/update-sub-category-status/${subCategoryID}`, {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: UPDATE_SUB_CATEGORY_STATUS_SUCCESS,
                    updated_sub_category: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: UPDATE_SUB_CATEGORY_STATUS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const getServices = async (dispatch, subCategoryID) => {
    dispatch({
        type: GET_SERVICES
    })
    try {
        return await axiosConfig
            .get(`/admin-api/sub-categories/${subCategoryID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: GET_SERVICES_SUCCESS,
                    services: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: GET_SERVICES_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};

export const updateService = async (dispatch, serviceID) => {
    dispatch({
        type: UPDATE_SERVICES_STATUS
    })
    try {
        return await axiosConfig
            .put(`/admin-api/update-service-status/${serviceID}`, {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                console.log(response);
                dispatch({
                    type: UPDATE_SERVICES_STATUS_SUCCESS,
                    job_list: response.data,
                })
                return response;
            })
    } catch (error) {
        dispatch({
            type: UPDATE_SERVICES_STATUS_ERROR,
            errorMessage: error.response.data.message
        })
        return error.response;
    }
};