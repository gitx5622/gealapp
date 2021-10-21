import axiosConfig from 'config/axios';

export const getUserCount = async () => {
  try {
    const response = await axiosConfig.get('/user_counts', {
      headers: {
        'X-TOPRATED-TOKEN': localStorage.token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getActionCount = async ({ action }) => {
  try {
    const response = await axiosConfig.get(
      `/session_logs/count?action=${action}`,
      {
        headers: {
          'X-TOPRATED-TOKEN': localStorage.token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getActionChart = async ({ action }) => {
  try {
    const response = await axiosConfig.get(
      `/session_logs/chart?action=${action}`,
      {
        headers: {
          'X-TOPRATED-TOKEN': localStorage.token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getMerchantSummary = async () => {
  try {
    const response = await axiosConfig.get('/merchants_count_summary', {
      headers: {
        'X-TOPRATED-TOKEN': localStorage.token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getPostsSummary = async () => {
  try {
    const response = await axiosConfig.get('/merchant_posts_count_summary', {
      headers: {
        'X-TOPRATED-TOKEN': localStorage.token,
      },
    });
    return response.data;
  } catch (error) {
    return error.response;
  }
};
