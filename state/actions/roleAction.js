import axiosConfig from '../../config/axios';
import {
    GET_ROLE, GET_ROLE_ERROR, GET_ROLE_SUCCESS, GET_ALL_PERMISSIONS,
    GET_ALL_PERMISSIONS_ERROR, GET_ALL_PERMISSIONS_SUCCESS, CREATE_ROLE_PERMISSIONS,
    CREATE_ROLE_PERMISSIONS_SUCCESS, CREATE_ROLE_PERMISSIONS_ERROR, GET_ROLE_PERMISSIONS,
    GET_ROLE_PERMISSIONS_ERROR, GET_ALL_ROLES, GET_ALL_ROLES_SUCCESS, GET_ALL_ROLES_ERROR, GET_ROLE_PERMISSIONS_SUCCESS

} from "../dispatchTypes";

export const getUserRoles = (dispatch) => {
    dispatch({
        type: GET_ROLE,
    });
    axiosConfig
        .get(
            '/admin-api/get-user-roles',
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            }
        )
        .then(response => {
            localStorage.roles = JSON.stringify(response.data);
            dispatch({
                type: GET_ROLE_SUCCESS,
                user_roles: response.data,
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

export const getRolePermissions = async (dispatch, role_name) => {
    dispatch({
        type: GET_ROLE_PERMISSIONS,
    });
    try {
        return await axiosConfig.get(`/admin-api/get-role-permissions?role_name=${role_name}`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            }
        )
            .then(response => {
                dispatch({
                    type: GET_ROLE_PERMISSIONS_SUCCESS,
                    role_permissions: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_ROLE_PERMISSIONS_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};


export const getAllPermissions = async (dispatch) => {
    dispatch({
        type: GET_ALL_PERMISSIONS,
    });
    try {
        return await axiosConfig.get(`/admin-api/get-roles-and-permissions?type=2`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            }
        )
            .then(response => {
                dispatch({
                    type: GET_ALL_PERMISSIONS_SUCCESS,
                    all_permissions: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: GET_ALL_PERMISSIONS_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};

export const getAllRoles = (dispatch) => {
    dispatch({
        type: GET_ALL_ROLES,
    });
    axiosConfig
        .get(
            '/admin-api/get-roles-and-permissions?type=1',
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            }
        )
        .then(response => {
            dispatch({
                type: GET_ALL_ROLES_SUCCESS,
                all_roles: response.data,
            });
        })
        .catch(error => {
            dispatch({
                type: GET_ALL_ROLES_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_ALL_ROLES_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
};

export const createRolePermissions = (dispatch, bodyData) => {
    dispatch({
        type: CREATE_ROLE_PERMISSIONS,
    });
    axiosConfig
        .post(
            '/admin-api/create-role-permissions', bodyData,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            }
        )
        .then(response => {
            dispatch({
                type: CREATE_ROLE_PERMISSIONS_SUCCESS,
                role_permissions: response.data,
            });
        })
        .catch(error => {
            dispatch({
                type: CREATE_ROLE_PERMISSIONS_ERROR,
                errorMessage: error.response.data.message,
            });
        })
        .catch(() => {
            dispatch({
                type: CREATE_ROLE_PERMISSIONS_ERROR,
                errorMessage:
                    'Lost connection to the server. Kindly check your internet connection',
            });
        });
};