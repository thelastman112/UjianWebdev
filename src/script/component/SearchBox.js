import { API_TOKEN, host, hostImageOriginal } from '../config'
import { clearSearch, getSearch } from '../fetch/search'

class SearchBox extends HTMLElement {
  constructor () {
    super()
    console.log('constructed! search box')
  }

  connectedCallback () {
    this.render()
  }

  disconnectedCallback () {
    return ''
  }

  async afterRender () {
    clearSearch()
    getSearch()
    if (window.localStorage.getItem('search')) {
      document.getElementById('root').innerHTML = ''
      document.getElementById('inputsearch').value = window.localStorage.getItem('search')
      await this.renderData(window.localStorage.getItem('search'))
    }

    console.log('asd')
    document.querySelector('#buttoninput').addEventListener('click', async (e) => {
      e.preventDefault()
      const input = document.getElementById('inputsearch').value
      if (window.localStorage.getItem('search') !== input) {
        window.localStorage.setItem('search', input)
      }
      document.getElementById('root').innerHTML = ''

      this.renderData(input)
    })
    this.clearSearch()
  }

  async renderData (input) {
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
      document.getElementById('root').innerHTML +=
            `
              <div>
                <img src="${hostImageOriginal + search.poster_path}" class="h-[200px] w-max object-cover" />
                <h3>${search.title}</h3>
              </div>
            `
    })
  }

  clearSearch () {
    document.querySelector('#buttonclear').addEventListener('click', () => {
      window.localStorage.removeItem('search')
      window.location.reload()
    })
  }

  async render () {
    this.innerHTML = `
    <div class="container">
        <input type="text" id="inputsearch" placeholder="masukkan movie yang dicari..."
            class="my-[25px] p-2 sm:w-[500px] w-[250px] rounded-xl col-span-2">
        <button class="text-black p-2 bg-slate-50 self-center h-min outline-2 outline outline-black rounded-xl hover:bg-blue-400 hover:text-white place-self-end" type="button" id="buttoninput">Search</button>
        <button class="text-black p-2 bg-slate-50 self-center h-min outline-2 outline outline-black rounded-xl hover:bg-red-400 place-self-start" type="button" id="buttonclear">Clear</button>
    </div>
`
  }
}

if (!customElements.get('search-box')) { customElements.define('search-box', SearchBox) }
export default SearchBox
