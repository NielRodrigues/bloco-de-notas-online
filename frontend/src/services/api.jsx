import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL
const secret = process.env.REACT_APP_SECRET

const config = {
  headers: {
    "authorization": secret,
    "Content-Type": "application/json"
  }
}

export async function customers() {

  const data = await axios.get(`${baseURL}/users`, config)
  .then(response => response.data)
  .catch(error => error.response.data)

  return data
}

export async function createCustomers(data) {
  const responseData = axios.post(`${baseURL}/users`, data, config)
    .then((response) => {
      const resp = "Cliente cadastrado com sucesso."
      return [resp, response.status]
    })
    .catch((error) => {
      const resp = "Erro ao cadastrar cliente."
      return [resp, error.response.status]
    })

  return responseData
}

export async function login(data){
  const responseData = axios.post(`${baseURL}/login`, data, config)
    .then((response) => [response.status, response.data])
    .catch((error) => [error.response.status, error.response.data])

  return responseData
}

export async function updateNotes(data){
  const responseData = axios.put(`${baseURL}/users/${data.id}`, data, config)
    .then((response) => response.status)
    .catch((error) => error.response.status)

  return responseData
}

export async function register(data){
  const responseData = axios.post(`${baseURL}/users`, data, config)
    .then((response) => response.status)
    .catch((error) => error.response.status)

  return responseData
}

export async function file(formData){

  const configForm = {
    headers: {
      "authorization": "secret",
      "Content-Type": "multipart/form-data"
    }
  }

  const responseData = axios.post(`${baseURL}/files`, formData, configForm)
    .then((response) => [response.status, response.data])
    .catch((error) => [error.response.status, error.response.data])

  return responseData
}
