import axiosConfig from '../../config/axios';
import {GET_ROLE, GET_ROLE_ERROR, GET_ROLE_SUCCESS} from "../dispatchTypes";

export const getRoles = (dispatch) => {
    dispatch({
        type: GET_ROLE,
    });
    axiosConfig
        .get(
            '/admin-api/get-user-roles',
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': '0712966136',
                },
            }
        )
        .then(response => {
            console.log(response);
            dispatch({
                type: GET_ROLE_SUCCESS,
                roles: response.data,
            });
        })
        .catch(error => {
            dispatch({
                type: GET_ROLE_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_ROLE_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
};