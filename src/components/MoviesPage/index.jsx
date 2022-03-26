import { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./../Movie/";

import "./style.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
      .then((response) => setMovies([...response.data]));
  }, []);

  return (
    <main className="MoviesPage">
      <h1>Selecione o filme</h1>
      <ul>
        {movies.map((movie) => (
          <Movie data={movie} />
        ))}
      </ul>
    </main>
  );
}
