import axiosConfig from '../../config/axios';
import jwtdecode from 'jwt-decode';
import {ERROR, LOADING, SUCCESS} from "../dispatchTypes";

export const loginUser = async (dispatch, bodyData) => {
    dispatch({
        type: LOADING,
    });
    try {
        return await axiosConfig.post('/admin-api/user-login', bodyData).then(response => {
            let userToken = response.headers['token'];
            const tokenInfo = jwtdecode(userToken);
            let userData = response.data;
            if (userToken && tokenInfo.uid === userData.user_id){
                localStorage.sessionID = tokenInfo.sid;
                localStorage.currentUser = JSON.stringify(response.data);
                localStorage.token = userToken;
            }else {
                return {
                    dispatch: {
                        type: ERROR,
                        errorMessage: "User ID did not match with Token ID"
                    }
                }
            }
            dispatch({
                type: SUCCESS,
            });
            return response;
        });
    } catch (error) {
        let knownErrorStatusCodesResponses = {
            401: "Username and password don't match",
            400: 'Account not registered.',
        };
        dispatch({
            type: ERROR,
            errorMessage:
                knownErrorStatusCodesResponses[error.response.status] ||
                error.response.data.message,
        });

        return error.response;
    }
};
