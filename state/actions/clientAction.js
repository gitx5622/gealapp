import axiosConfig from '../../config/axios';
import {
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    GET_USERS, LIST_CLIENTS, LIST_CLIENTS_SUCCESS, LIST_CLIENTS_ERROR,
} from '../dispatchTypes';

export const getClients= (dispatch, role, page, per) => {
    dispatch({
        type: LIST_CLIENTS
    });
    axiosConfig
        .get(`/admin-api/filter-users?role=${role}page=${page}&per=${per}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                'phone': `${JSON.parse(localStorage.currentUser).phone}`,
            },
        })
        .then(response => {
            console.log(response);
            dispatch({
                type: LIST_CLIENTS_SUCCESS,
                client_list: response.data.user_list
            });
        })
        .catch(error => {
            dispatch({
                type: LIST_CLIENTS_ERROR,
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

