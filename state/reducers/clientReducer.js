import {
    ERROR,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    GET_USERS,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS,
    LIST_CLIENTS, LIST_CLIENTS_ERROR,
    LIST_CLIENTS_SUCCESS
} from "../dispatchTypes";

export const initialUserState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    client_list: {
        users: [],
        pagination: {},
    },
    user: {},
}

export const clientReducers = (
    state = initialUserState,
    action
) => {
    switch (action.type) {
        case ERROR: {
            return {
                ...state,
                isError: true,
                isLoading: false,
                errorMessage: action.errorMessage
            };
        }
        case LIST_CLIENTS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case LIST_CLIENTS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                client_list: action.client_list,
            };
        }
        case LIST_CLIENTS_ERROR: {
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