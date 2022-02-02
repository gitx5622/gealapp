import {
    FILTER_SKILLS, FILTER_SKILLS_ERROR, FILTER_SKILLS_SUCCESS,
} from "../dispatchTypes";
import axiosConfig from "../../config/axios";

export const filterSkills = async (dispatch, page, per) => {
    dispatch({
        type: FILTER_SKILLS,
    });
    try {
        return await axiosConfig
            .get(`/admin-api/filter-skills?page=${page}&per=${per}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': `${JSON.parse(localStorage.currentUser).phone}`,
                },
            })
            .then(response => {
                dispatch({
                    type: FILTER_SKILLS_SUCCESS,
                    skills: response.data,
                });
                return response;
            });
    } catch (error) {
        dispatch({
            type: FILTER_SKILLS_ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};
