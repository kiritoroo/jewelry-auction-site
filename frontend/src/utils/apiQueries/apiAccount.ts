import axios from '@util/axiosUtil'

interface LoginPOST {
  username: string;
  password: string;
}

interface userGET{
  token: string;
  username: string;
}

export const loginPOST = ({ username, password }: LoginPOST) => {
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)
  return axios.post('account/login', params)
}

export const userGET = ({ token, username }: userGET) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }
  return axios.get(`account/me/${username}`, config)
}

export const registerPOST = ({  }) => {

}