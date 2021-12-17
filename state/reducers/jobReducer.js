import {
    GET_ACTIVE_JOBS,
    GET_ACTIVE_JOBS_ERROR,
    GET_ACTIVE_JOBS_SUCCESS,
    GET_ALL_JOBS,
    GET_ALL_JOBS_ERROR,
    GET_ALL_JOBS_SUCCESS,
    GET_COMPLETED_JOBS,
    GET_COMPLETED_JOBS_ERROR,
    GET_COMPLETED_JOBS_SUCCESS,
    GET_PENDING_JOBS,
    GET_PENDING_JOBS_ERROR,
    GET_PENDING_JOBS_SUCCESS,
    GET_REJECTED_JOBS, GET_REJECTED_JOBS_ERROR,
    GET_REJECTED_JOBS_SUCCESS, GET_SCHEDULED_JOBS, GET_SCHEDULED_JOBS_ERROR, GET_SCHEDULED_JOBS_SUCCESS,
} from "../dispatchTypes";

export const initialRoleState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    job_list: {
        jobs: [],
        pagination: {},
    },
    status: "",
}

export const jobReducer = (state = initialRoleState, action) => {
    switch (action.type) {
        case GET_ALL_JOBS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ALL_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                job_list: action.job_list,
            };
        }
        case GET_ALL_JOBS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_COMPLETED_JOBS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_COMPLETED_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                job_list: action.job_list,
            };
        }
        case GET_COMPLETED_JOBS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_SCHEDULED_JOBS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_SCHEDULED_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                job_list: action.job_list,
            };
        }
        case GET_SCHEDULED_JOBS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_PENDING_JOBS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_PENDING_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                job_list: action.job_list,
            };
        }
        case GET_PENDING_JOBS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_REJECTED_JOBS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_REJECTED_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                job_list: action.job_list,
            };
        }
        case GET_REJECTED_JOBS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        case GET_ACTIVE_JOBS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_ACTIVE_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                job_list: action.job_list,
            };
        }
        case GET_ACTIVE_JOBS_ERROR: {
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