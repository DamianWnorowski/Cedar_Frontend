import axios from 'axios'

const setAuthToken = (token) => {
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
  console.log('Authorization header is initial')
}

export default setAuthToken
