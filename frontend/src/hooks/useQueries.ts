import { useQuery, useQueryClient } from "react-query";
import { getAd, getAds } from "@util/apiQueries/apiAd";
import { userGET } from "@util/apiQueries/apiAccount";

export const useGetAds = () => {
  return useQuery(['ads'], () => getAds())
}

export const useGetAd = (adId: string) => {
  const queryClient = useQueryClient()
  return useQuery(['ad', adId],
    getAd, {
      initialData: () => {
        const ad = queryClient
          .getQueryData('ads')
          ?.data?.find((ad) => ad.id === parseInt(adId))

        if (ad) {
          return { data: ad }
        }
      }
    }
  )
}

export const useGetUser = (token: string, user_id: string) => useQuery(['usr'], () => {
  return userGET({ token, user_id })
})