import { getMovieLatest, getMovieTopRated, getMovieUpcoming } from '../fetch/movie'
import { clearSearch, getSearch } from '../fetch/search'

class MoviesPage extends HTMLElement {
  constructor () {
    super()
    console.log('constructed!')
  }

  connectedCallback () {
    // this.title_head = this.getAttribute('title') || 'Movies & Tv'
    // clearSearch()
    // getSearch()
    // getMovieLatest()
    // getMovieTopRated()
    // getMovieUpcoming()
    this.render()
  }

  disconnectedCallback () {
    return ''
  }

  async afterRender () {
    clearSearch()
    getSearch()
    getMovieLatest()
    getMovieTopRated()
    getMovieUpcoming()
    document.querySelector('#buttoninput').addEventListener('click', getSearch)

    document.getElementById('popular').addEventListener('wheel', (e) => {
      e.preventDefault()
      document.querySelector('#popular').scrollLeft += e.deltaY
    })
    document.getElementById('upcoming').addEventListener('wheel', (e) => {
      e.preventDefault()
      document.querySelector('#upcoming').scrollLeft += e.deltaY
    })
    document.getElementById('toprated').addEventListener('wheel', (e) => {
      e.preventDefault()
      document.querySelector('#toprated').scrollLeft += e.deltaY
    })
  }

  async render () {
    this.innerHTML = `

<div id="movieshown" style="display: block;">
    <h2 class="p-3">Latest</h2>
    <div id="popular" class="gap-4 p-3 flex overflow-x-scroll scrollbar-hide"></div>
    <h2 class="p-3">Top Rated</h2>
    <div id="toprated" class="gap-4 p-3 flex overflow-x-scroll scrollbar-hide"></div>
    <h2 class="p-3">Upcoming</h2>
    <div id="upcoming" class="gap-4 p-3 flex overflow-x-scroll scrollbar-hide"></div>
</div>`
    return '<movies-pages></movies-pages>'
  }
}

if (!customElements.get('movies-pages')) { customElements.define('movies-pages', MoviesPage) }
export default MoviesPage

// export default MoviesPage
