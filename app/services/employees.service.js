import axios from 'axios';

Object.assign(
  axios.defaults.headers.common,
  {
      accept: 'application/json',
  }
)
axios.defaults.baseURL = 'http://188.166.116.56:3000';

export default {
  getEmployees(params) {
    return axios.get(
      '/employees',
      params
    ).then(({ data }) => data)
  },
  getSingleEmployee(id, params) {
    return axios.get(`/employees/${id}`, params)
      .then(({ data }) => data[0] || {})
  }
}
