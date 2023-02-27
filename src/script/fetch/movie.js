import { API_TOKEN, host, hostImageOriginal } from '../config'
export const getMovieLatest = async () => {
  const movies = await fetch(`${host}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  })
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error(error)
      return []
    })
  console.log(movies)
  movies.forEach(movie => {
    // getMovieImage(movie.id)
    document.getElementById('popular').innerHTML +=
    `
      <div class="">
        <img src="${hostImageOriginal + movie.poster_path}" class="h-[200px] w-max" />
        <h3>${movie.title}</h3>
      </div>
    `
  })
  return movies
}
export const getMovieTopRated = async () => {
  const movies = await fetch(`${host}/movie/top_rated`, {
    headers: {
      
    }
  })

}