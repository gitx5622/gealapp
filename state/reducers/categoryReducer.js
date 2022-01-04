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

export const initialRoleState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    categories: [],
    updated_category:{},
    sub_categories: [],
    updated_sub_category:{},
    services: [],
    updated_service: {},
}

export const categoryReducer = (state = initialRoleState, action) => {
    switch (action.type) {
        case GET_CATEGORIES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                categories: action.categories,
            };
        }
        case GET_CATEGORIES_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case UPDATE_CATEGORY_STATUS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case UPDATE_CATEGORY_STATUS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                updated_category: action.updated_category,
            };
        }
        case UPDATE_CATEGORY_STATUS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case UPDATE_SUB_CATEGORY_STATUS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case UPDATE_SUB_CATEGORY_STATUS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                updated_sub_category: action.updated_sub_category,
            };
        }
        case UPDATE_SUB_CATEGORY_STATUS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_SUB_CATEGORY_AND_SERVICES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_SUB_CATEGORY_AND_SERVICES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                sub_categories: action.sub_categories,
            };
        }
        case GET_SUB_CATEGORY_AND_SERVICES_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_SERVICES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_SERVICES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                services: action.services,
            };
        }
        case GET_SERVICES_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case UPDATE_SERVICES_STATUS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case UPDATE_SERVICES_STATUS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                updated_service: action.updated_service,
            };
        }
        case UPDATE_SERVICES_STATUS_ERROR: {
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