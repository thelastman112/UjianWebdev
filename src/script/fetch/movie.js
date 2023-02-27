import { API_TOKEN, host, hostImageOriginal } from '../config'
export const getMovieLatest = async () => {
  const movies = await fetch(`${host}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  })
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => {
      console.error(err)
      return []
    })
  movies.forEach(latest => {
    document.getElementById('popular').innerHTML +=
    `
      <div class="">
        <img src="${hostImageOriginal + latest.poster_path}" class="h-[200px] w-max" />
        <h3>${latest.title}</h3>
      </div>
    `
  })
  return movies
}
export const getMovieTopRated = async () => {
  const movies = await fetch(`${host}/movie/top_rated`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  })
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => {
      console.error(err)
      return []
    })
  movies.forEach(toprated => {
    document.getElementById('toprated').innerHTML +=
      `
        <div class="">
          <img src="${hostImageOriginal + toprated.poster_path}" class="h-[200px] w-max" />
          <h3>${toprated.title}</h3>
        </div>
      `
  })
  return movies
}

export const getMovieUpcoming = async () => {
  const movies = await fetch(`${host}/movie/upcoming`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  })
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((err) => {
      console.log(err)
      return []
    })
  movies.forEach((upcoming) => {
    document.getElementById('upcoming').innerHTML +=
    `
    <div class="">
          <img src="${hostImageOriginal + upcoming.poster_path}" class="h-[200px] w-max" />
          <h3>${upcoming.title}</h3>
        </div>
    `
  })
  return movies
}
