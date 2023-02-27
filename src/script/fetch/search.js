import { API_TOKEN, host, hostImageOriginal } from '../config'
export const getSearch = async (e) => {
  const input = document.getElementById('inputsearch').value
  // e.preventDefault()
  const movies = await fetch(`${host}/search/movie?query=${input}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  })
    .then(response => response.json())
    .then(data => data.results)
    .catch((err) => {
      console.log(err)
      return []
    })
  console.log(movies)
  movies.forEach(search => {
    document.getElementById('search').innerHTML +=
      `
        <div class="">
          <img src="${hostImageOriginal + search.poster_path}" class="h-[200px] w-max" />
          <h3>${search.title}</h3>
        </div>
      `
  })
  // window.location.reload()
  return movies
}

document.querySelector('#buttoninput').addEventListener('click', getSearch)
