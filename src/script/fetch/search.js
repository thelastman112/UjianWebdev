import { API_TOKEN, host, hostImageOriginal } from '../config'
export const getSearch = async () => {
  const input = document.getElementById('inputsearch').value
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
  document.getElementById('buttoninput').addEventListener('click', e => {
    e.preventDefault()
    document.getElementById('mainshown').style.display = 'none'
    document.getElementById('search').style.display = 'block'
  })
  document.getElementById('search').innerHTML = ''
  movies.forEach(search => {
    document.getElementById('search').innerHTML +=
      `
        <div class="">
          <img id="imagesearch" src="${hostImageOriginal + search.poster_path}" class="h-[200px] w-full mx-auto object-cover" alt="${search.title}" />
          <h3 class="mx-auto text-center">${search.title}</h3>
        </div>
      `
  })
  // window.location.reload()
  document.querySelector('#buttonclear').addEventListener('click', e => {
    e.preventDefault()
    window.location.reload()
  })
  document.querySelector('#buttoninput').addEventListener('click', getSearch)
  return movies
}
