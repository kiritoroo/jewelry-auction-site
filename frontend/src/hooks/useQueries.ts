import { useQuery, useQueryClient } from "react-query";
import { getAd, getAds } from "@util/apiQueries/apiAd";

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