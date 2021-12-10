import {
    ERROR,
    GET_USER, GET_USER_ERROR, GET_USER_SUCCESS, GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS
} from "../dispatchTypes";

export const initialUserState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    user_list: {
        users: [],
        pagination: {},
    },
    user: {},
}

export const usersReducers = (
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
        case GET_USERS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                user_list: action.user_list,
            };
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_USER: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                user: action.user,
            };
        }
        case GET_USER_ERROR: {
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