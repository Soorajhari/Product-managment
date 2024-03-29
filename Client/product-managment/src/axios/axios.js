import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:4000/",

    headers:{
        'Content-Type': 'application/json',
    },
 
  })

  instance.interceptors.request.use((config) => {
    let userDetails = localStorage.getItem("user");
    console.log(userDetails)
    if (userDetails) {
      let firstLogin = JSON.parse(userDetails);
      const accesstoken = firstLogin.accesstoken;
      if (accesstoken) {
        config.headers.Authorization = `Bearer ${accesstoken}`;
      }
    }
    return config;
  });
  
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        console.log("hi sree");
        try {
          let userDetails = localStorage.getItem("user");
          let firstLogin;
          if (userDetails) {
            firstLogin = JSON.parse(userDetails);
            console.log(firstLogin);
            const refreshtoken = firstLogin.refreshtoken;
            console.log(refreshtoken);
            const response = await axios.post("http://localhost:4000/refresh", {
              refreshtoken,
            });
            console.log(response);
            const newAccessToken = response.data.access_token;
            firstLogin.accesstoken = newAccessToken;
            localStorage.setItem("user", JSON.stringify(firstLogin));
            originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;
            return instance(originalRequest);
          }
  
          // localStorage.setItem('acesstoken', token);
        } catch (error) {
          console.log(error);
        }
      }
    }
  );
  
  export default instance