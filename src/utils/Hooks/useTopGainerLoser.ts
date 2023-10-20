import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useTopGainerLoser = () => {
  const SECRET_KEY = process.env.NEXT_PUBLIC_ALPHA_API_KEY;
  const URL = ` ${"https://www.alphavantage.co/query?function="}${"TOP_GAINERS_LOSERS"}&&apikey=${SECRET_KEY}`;
  console.log(URL);
  return useQuery({
    queryKey: ["gainer_looser", URL],
    queryFn: async () => {
      const { data } = await axios.get(URL);
      return data;
    },
  });
};
