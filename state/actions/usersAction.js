import axiosConfig from '../../config/axios';
import {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    CREATE_USER,
    GET_USERS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_ERROR,
} from '../dispatchTypes';

export const getUsers= (dispatch, search, gender, country) => {
    dispatch({
        type: GET_USERS
    });
    axiosConfig
        .get(`/admin-api/filter-users?search=${search}&gender=${gender}&country=${country}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'phone': '0712966136',
            },
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: GET_USERS_SUCCESS,
                user_list: response.data.user_list
            });
        })
        .catch(error => {
            dispatch({
                type: GET_USERS_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_USERS_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
};

export const createUser = (dispatch, credentials) => {
    dispatch({
        type: CREATE_USER
    });

    axiosConfig
        .post(`/users`, credentials, {
            headers: {
                'token': localStorage.token,
            },
        })
        .then(response => {
            dispatch({
                type: CREATE_ORDERS_SUCCESS,
                orders: response.data,
            });
        })
        .catch(error => {
            dispatch({
                type: CREATE_ORDERS_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: CREATE_ORDERS_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
}

export const getUser = (dispatch, userId) => {
    dispatch({
        type: GET_USER,
    });
    axiosConfig
        .get(`/users/${userId}`, {
            headers: {
                'token': localStorage.token,
            },
        })
        .then(response => {
            dispatch({
                type: GET_USER_SUCCESS,
                order: response.data,
            })
        })
        .catch(error => {
            dispatch({
                type: GET_USER_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_USER_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
};
