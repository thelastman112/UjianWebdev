import { API_TOKEN, host, hostImageOriginal } from '../config'
import 'lazysizes'
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
        <img alt="" src="image/noimg.jpg" data-src="${latest.poster_path ? hostImageOriginal + latest.poster_path : 'image/noimg.jpg'}" class="h-[200px] w-max lazyload" />
        <h1 class="">${latest.title}</h1>
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
          <img alt="" src="image/noimg.jpg" data-src="${toprated.poster_path ? hostImageOriginal + toprated.poster_path : 'image/noimg.jpg'}" class="h-[200px] w-max lazyload" />
          <h1>${toprated.title}</h1>
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
      console.error(err)
      return []
    })
  movies.forEach((upcoming) => {
    document.getElementById('upcoming').innerHTML +=
    `
    <div class="">
          <img alt="" src="image/noimg.jpg" data-src="${upcoming.poster_path ? hostImageOriginal + upcoming.poster_path : 'image/noimg.jpg'}" class="h-[200px] w-max lazyload" />
          <h1>${upcoming.title}</h1>
        </div>
    `
  })
  return movies
}
