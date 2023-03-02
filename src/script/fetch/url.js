import { API_TOKEN, host } from '../config'

export const fetchImage = async () => {
  const fetchId = await fetch(`${host}/movie/popular`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`
    }
  })
    .then((response) => response.json())
    .then((data) => data.results[1].id)
    .catch((err) => {
      console.error(err)
      return []
    })
  console.log(fetchId)
  const getImage = await fetch(`${host}/movie/${fetchId}/images`, {
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
  console.log(getImage)
}
