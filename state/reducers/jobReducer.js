import {
    GET_ACTIVE_JOBS,
    GET_ACTIVE_JOBS_ERROR,
    GET_ACTIVE_JOBS_SUCCESS,
    GET_ALL_JOBS,
    GET_ALL_JOBS_ERROR,
    GET_ALL_JOBS_SUCCESS,
    GET_CATEGORIES,
    GET_CATEGORIES_ERROR,
    GET_CATEGORIES_SUCCESS,
    GET_COMPLETED_JOBS,
    GET_COMPLETED_JOBS_ERROR,
    GET_COMPLETED_JOBS_SUCCESS,
    GET_DECLINED_JOBS,
    GET_DECLINED_JOBS_ERROR,
    GET_DECLINED_JOBS_SUCCESS,
    GET_JOB_DETAILS,
    GET_JOB_DETAILS_ERROR,
    GET_JOB_DETAILS_SUCCESS,
    GET_PENDING_JOBS,
    GET_PENDING_JOBS_ERROR,
    GET_PENDING_JOBS_SUCCESS,
    GET_REJECTED_JOBS,
    GET_REJECTED_JOBS_ERROR,
    GET_REJECTED_JOBS_SUCCESS,
    GET_SCHEDULED_JOBS,
    GET_SCHEDULED_JOBS_ERROR,
    GET_SCHEDULED_JOBS_SUCCESS,
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
    job_list: {
        jobs: [],
        pagination: {},
    },
    pending_list: {
        jobs: [],
        pagination: {},
    },
    active_list: {
        jobs: [],
        pagination: {},
    },
    rejected_list: {
        jobs: [],
        pagination: {},
    },
    scheduled_list: {
        jobs: [],
        pagination: {},
    },
    declined_list: {
        jobs: [],
        pagination: {},
    },
    status: "",
    job: {},
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
                scheduled_list: action.scheduled_list,
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
                pending_list: action.pending_list,
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
                rejected_list: action.rejected_list,
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
        case GET_DECLINED_JOBS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_DECLINED_JOBS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                declined_list: action.declined_list,
            };
        }
        case GET_DECLINED_JOBS_ERROR: {
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
                active_list: action.active_list,
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
        case GET_JOB_DETAILS: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_JOB_DETAILS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                job: action.job,
            };
        }
        case GET_JOB_DETAILS_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
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
                job: action.job,
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
                job: action.job,
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
                job: action.job,
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
                job: action.job,
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
                job: action.job,
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
                job: action.job,
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