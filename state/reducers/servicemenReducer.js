import {
    APPROVE_SERVICEMAN,
    APPROVE_SERVICEMAN_ERROR,
    APPROVE_SERVICEMAN_SUCCESS,
    ERROR,
    GET_ALL_SERVICEMEN,
    GET_ALL_SERVICEMEN_SUCCESS,
    GET_SERVICEMAN,
    GET_SERVICEMAN_ERROR,
    GET_SERVICEMAN_SUCCESS,
    GET_USER,
    GET_USER_ERROR,
    GET_USER_SUCCESS,
    GET_USERS,
    GET_USERS_ERROR,
    GET_USERS_SUCCESS,
    REJECT_SERVICEMAN, REJECT_SERVICEMAN_ERROR,
    REJECT_SERVICEMAN_SUCCESS
} from "../dispatchTypes";

export const initialUserState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    servicemen: [],
    serviceman: {},
    approved_serviceman: {},
    rejected_serviceman: {},
}

export const servicemenReducers = (
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
        case GET_ALL_SERVICEMEN: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ALL_SERVICEMEN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                servicemen: action.servicemen,
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
        case GET_SERVICEMAN: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_SERVICEMAN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                serviceman: action.serviceman,
            };
        }
        case GET_SERVICEMAN_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case APPROVE_SERVICEMAN: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case APPROVE_SERVICEMAN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                approved_serviceman: action.approved_serviceman,
            };
        }
        case APPROVE_SERVICEMAN_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case REJECT_SERVICEMAN: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case REJECT_SERVICEMAN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                rejected_serviceman: action.rejected_serviceman,
            };
        }
        case REJECT_SERVICEMAN_ERROR: {
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