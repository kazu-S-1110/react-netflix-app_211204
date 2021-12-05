import axios from 'axios';
import { useEffect, useState } from 'react';

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

export const Row = ({ title, fetchUrl }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const baseURL = 'https://api.themoviedb.org/3';

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(baseURL + fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return <div className="Row"></div>;
};
