
import { useEffect } from "react";
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

  
  

export const MovieList = ({apiPath,title}) => {

  const {data:movies} = useFetch(apiPath);
  useTitle(title);

  // useEffect(() => {
  //   async function fetchMovies(){
  //     const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=b80d59c33d6d57ed9c7e3713f91c188a");
  //     const data = await response.json();
  //     setMovies(data.results);
  //   }
  //   fetchMovies();
  // }, [])

  useEffect(() => {
    document.title = `${title}/ Cinemate`;
  });

    return (
      <main>
      <section className="max-w-7xl mx-auto py-7 ">
        <div className="flex justify-start flex-wrap other:justify-evenly">       
          { movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          )) }          
        </div>
      </section>
    </main>
    )
  }
  
  
