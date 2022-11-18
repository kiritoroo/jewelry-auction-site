import axios from '@util/axiosUtil'

export const getAds = () => {
  return axios.get('ad')
}

export const getAd = ({ queryKey }) => {
  const adId = queryKey[1]
  const config = {
    headers: { Authorization: `Bearer...`}
  }
  return axios.get(`ad/${adId}`)
}