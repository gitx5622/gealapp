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
    GET_USERS_ERROR,
    REJECT_SERVICEMAN, REJECT_SERVICEMAN_ERROR,
    REJECT_SERVICEMAN_SUCCESS,
    REJECT_SERVICEMAN_FILE,
    REJECT_SERVICEMAN_FILE_SUCCESS,
    REJECT_SERVICEMAN_FILE_ERROR,
    APPROVE_SERVICEMAN_FILE,
    APPROVE_SERVICEMAN_FILE_SUCCESS,
    APPROVE_SERVICEMAN_FILE_ERROR, FILTER_SKILLS, FILTER_SKILLS_SUCCESS, FILTER_SKILLS_ERROR
} from "../dispatchTypes";

export const initialUserState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    skills: {},
}

export const skillReducers = (
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
        case FILTER_SKILLS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case FILTER_SKILLS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                skills: action.skills,
            };
        }
        case FILTER_SKILLS_ERROR: {
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