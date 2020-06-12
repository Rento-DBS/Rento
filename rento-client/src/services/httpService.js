import axios from "axios";
// import { toast } from "react-toastify";
// import logger from "./logService";

// THIS VALUE WILL CHANGE DEPENDING IN WHAT MODE WE ARE BUILDING THE APPLICATION
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

//when we get a response with an error this function will be called first then the control is passed to the catch block
// uncomment this once sentry/logService is completed
// axios.interceptors.response.use(null, (error) => {
//     const expectedError =
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status < 500;
//     if (!expectedError) {
//         logger.log(error);
//         toast.error("Unexpected error occurred");
//     }
//     return Promise.reject(error); // return the rejected promise
// });

export function setJwt(jwt) {
    //if the user is not defined the following header will not be set
    axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
};
