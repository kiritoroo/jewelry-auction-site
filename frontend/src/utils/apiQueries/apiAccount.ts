import axios from '@util/axiosUtil'

interface LoginPOST {
  username: string;
  password: string;
}

export const loginPOST = ({ username, password }: LoginPOST) => {
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)
  return axios.post('account/login', params)
}