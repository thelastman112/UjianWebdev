import { getMovieLatest, getMovieTopRated, getMovieUpcoming } from '../fetch/movie'
import { getSearch } from '../fetch/search'

const main = () => {
  fetch()
}

const fetch = async () => {
  getSearch()
  getMovieLatest()
  getMovieTopRated()
  getMovieUpcoming()
}

export default main
