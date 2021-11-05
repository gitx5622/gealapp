import {
    GET_ROLE, GET_ROLE_ERROR, GET_ROLE_SUCCESS, GET_ALL_PERMISSIONS,
    GET_ALL_PERMISSIONS_SUCCESS, GET_ALL_PERMISSIONS_ERROR, CREATE_ROLE_PERMISSIONS,
    CREATE_ROLE_PERMISSIONS_SUCCESS, CREATE_ROLE_PERMISSIONS_ERROR, GET_ROLE_PERMISSIONS,
    GET_ROLE_PERMISSIONS_SUCCESS, GET_ROLE_PERMISSIONS_ERROR, GET_ALL_ROLES, GET_ALL_ROLES_SUCCESS,
    GET_ALL_ROLES_ERROR,
    UPDATE_ROLE_PERMISSIONS,
    UPDATE_ROLE_PERMISSIONS_SUCCESS,
    UPDATE_ROLE_PERMISSIONS_ERROR,
    DELETE_ROLES_AND_PERMISSIONS,
    DELETE_ROLES_AND_PERMISSIONS_SUCCESS,
    DELETE_ROLES_AND_PERMISSIONS_ERROR,
} from "../dispatchTypes";

export const initialRoleState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    role_permissions: {},
    all_permissions: {},
    all_roles: {},
    user_roles: {
        role: '',
        user_permissions: []
    },
    updated_permissions: {},
    deleted_role_permissions: {}
}

export const roleReducer = (state = initialRoleState, action) => {
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
                user_roles: action.user_roles,
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
        case GET_ALL_ROLES: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ALL_ROLES_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                all_roles: action.all_roles,
            };
        }
        case GET_ALL_ROLES_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_ALL_PERMISSIONS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ALL_PERMISSIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                all_permissions: action.all_permissions,
            };
        }
        case GET_ALL_PERMISSIONS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_ROLE_PERMISSIONS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ROLE_PERMISSIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                role_permissions: action.role_permissions,
            };
        }
        case GET_ROLE_PERMISSIONS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case CREATE_ROLE_PERMISSIONS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case CREATE_ROLE_PERMISSIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                role_permissions: [...state, state.role_permissions],
            };
        }
        case CREATE_ROLE_PERMISSIONS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case UPDATE_ROLE_PERMISSIONS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case UPDATE_ROLE_PERMISSIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                updated_permissions: action.updated_permissions,
            };
        }
        case UPDATE_ROLE_PERMISSIONS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case DELETE_ROLES_AND_PERMISSIONS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case DELETE_ROLES_AND_PERMISSIONS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                deleted_role_permissions: state.all_roles.user_permissions.filter(item => item.role_name !== action.role_name)
            };
        }
        case DELETE_ROLES_AND_PERMISSIONS_ERROR: {
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