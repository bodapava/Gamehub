import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  AxiosRequestConfig,
  CanceledError,
} from "axios";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchgameResponse {
  count: number;
  results: Game[];
}
const useGames = (
  selectedGenre?: Genre | null
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<FetchgameResponse>("/games", {
          signal: controller.signal,
          params: { genres: selectedGenre?.id },
        })
        .then((res) => {
          setGames(res.data.results),
            setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError)
            return;
          setErrors(err.message);
          setLoading(false);
        });

      return () => {
        controller.abort();
      };
    },
    selectedGenre?.id ? [selectedGenre?.id] : []
  );

  return { games, errors, isLoading };
};
export default useGames;
