export default function unAuthorizedInterceptor(axiosConfig) {
  axiosConfig.interceptors.response.use(
    response => response,
    error => {
      if (error.response && error.response.status === 401) {
        let token = localStorage.token;
        if (token) {
          localStorage.token = token;
        }
        localStorage.clear();
        window.location.replace('/user/login');
      }

      return Promise.reject(error);
    }
  );
}
