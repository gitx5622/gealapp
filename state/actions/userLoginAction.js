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
                dispatch({
                    type: SUCCESS,
                });
            }else {
                return {
                    dispatch: {
                        type: ERROR,
                        errorMessage: "User ID did not match with Token ID"
                    }
                }
            }
            return response;
        });
    } catch (error) {
        dispatch({
            type: ERROR,
            errorMessage: error.response.data.message,
        });

        return error.response;
    }
};
