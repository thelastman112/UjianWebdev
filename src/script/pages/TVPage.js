import { getMovieLatest, getMovieTopRated, getMovieUpcoming } from '../fetch/movie'
import { clearSearch, getSearch } from '../fetch/search'

class TVPage extends HTMLElement {
  constructor () {
    super()
    console.log('constructed!')
  }

  connectedCallback () {
    // this.title_head = this.getAttribute('title') || 'Movies & Tv'
    this.render()
  }

  disconnectedCallback () {
    // return ''
  }

  async afterRender () {
    console.log('afterRender tv')
  }

  render () {
    clearSearch()
    getSearch()
    getMovieLatest()
    getMovieTopRated()
    getMovieUpcoming()
    return '<tv-pages></tv-pages>'
  }
}
export default TVPage

if (!customElements.get('tv-pages')) { customElements.define('tv-pages', TVPage) }
