import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import api from "../../servers/api";
import { ContainerH, ContainerItems } from "./styles";

function Home() {
  const [movies, setMovies] = useState();
  const [filteredmovies, setFilteredMovies] = useState();

  useEffect(() => {
    async function loadData() {
      const {
        data: { docs },
      } = await api.get("movie");

      setMovies(docs);
      setFilteredMovies(docs);

      console.log(docs);
    }
    loadData();
  }, []);

  return (
    <ContainerH>
      <Header movies={movies} setFilteredMovies={setFilteredMovies} />
      <ContainerItems>
        {filteredmovies &&
          filteredmovies.map((movie) => (
            <Card movieData={movie} key={movie._id} />
          ))}
      </ContainerItems>
    </ContainerH>
  );
}

export default Home;
