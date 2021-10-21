import axiosConfig from '../../config/axios';

import { LOADING, SUCCESS, ERROR } from '../dispatchTypes';

export const logoutUser = (dispatchLogoutUser, sessionID) => {
    dispatchLogoutUser({
        type: LOADING,
    });

    try {
        axiosConfig
            .delete(`/admin-api/sessions/${sessionID}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`,
                    'phone': '0712966136',
                },
            })
            .then(response => {
                dispatchLogoutUser({
                    type: SUCCESS,
                });
            })
            .catch(error => {
                    dispatchLogoutUser({
                        type: ERROR,
                        errorMessage: error.response.data.message,
                    });
                }
            )
            .catch(() => {
                dispatchLogoutUser({
                    type: ERROR,
                    errorMessage: 'Failed to process request. Check internet connection',
                });
            });
    } catch (error) {
        dispatchLogoutUser({
            type: ERROR,
            errorMessage: 'Something went wrong, try again later!',
        });
    }
};
