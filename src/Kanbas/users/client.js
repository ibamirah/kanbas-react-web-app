import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
const request = axios.create({
    withCredentials: true,
  });
export const signin = async (credentials) => {
    console.log(credentials);
    console.log(USERS_API);
    const response = await request.post(`${USERS_API}/signin`, credentials);
    return response.data;
};
export const account = async () => {
    const response = await request.post(`${USERS_API}/account`);
    return response.data;
};
export const findAllUsers = async () => {
    const response = await request.get(`${USERS_API}`);
    return response.data;
};
export const updateUser = async (user) => {
    const response = await request.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};
export const createUser = async (user) => {
    const response = await request.post(`${USERS_API}`, user);
    return response.data;
};
export const findUserById = async (id) => {
    const response = await request.get(`${USERS_API}/${id}`);
    return response.data;
  };
  



