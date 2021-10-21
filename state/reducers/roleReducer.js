import {
    GET_ORDER,
    GET_ORDER_ERROR,
    GET_ORDER_SUCCESS,
    GET_ORDERS,
    GET_ORDERS_ERROR,
    GET_ORDERS_SUCCESS,
    GET_ROLE, GET_ROLE_ERROR, GET_ROLE_SUCCESS,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    GET_USERS,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS
} from "../dispatchTypes";

export const initialOrdersState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    roles: {
        role: '',
        user_permissions: []
    },
}

export const roleReducer = (
    state = initialOrdersState,
    action
) => {
    switch (action.type) {
        case GET_ROLE: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ROLE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                roles: action.roles,
            };
        }
        case GET_ROLE_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        default:
            return state
    }

};