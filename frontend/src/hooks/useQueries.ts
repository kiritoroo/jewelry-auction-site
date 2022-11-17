import { useQuery } from "react-query";
import { getAds } from "@util/apiQueries/apiAd";

export const useGetAds = () => useQuery(['ads'], () => getAds())