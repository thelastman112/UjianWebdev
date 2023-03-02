import { scrollBarWheel } from '../component/scrollbar'
import { getMovieLatest, getMovieTopRated, getMovieUpcoming } from '../fetch/movie'
import { getSearch } from '../fetch/search'
import { fetchImage } from '../fetch/url'
import { moviePage } from '../page/moviepage'

const main = () => {
  fetch()
}

const fetch = async () => {
  moviePage()
  getMovieLatest()
  getMovieTopRated()
  getMovieUpcoming()
  getSearch()
  scrollBarWheel()
  fetchImage()
}

export default main
