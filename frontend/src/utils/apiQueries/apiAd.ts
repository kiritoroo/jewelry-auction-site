import axios from '@util/axiosUtil'

export const getAds = () => {
  return axios.get('ad')
}