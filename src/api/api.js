import axios from 'axios'
import router from '../router'

const baseUrl = 'http://localhost:8080/api';

export const loginUserUrl = (params)=>{
  return axios.post(`${baseUrl}/admin/login`, params)

}
export const queryUsersUrl = (params)=>{
  return axios.post(`${baseUrl}/admin/queryUsers`, params)

}
