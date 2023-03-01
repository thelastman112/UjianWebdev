export const getSearch = async (e) => {
}

export const clearSearch = () => {
  document.querySelector('#buttonclear').addEventListener('click', () => {
    const url = window.location.href
    const noQuery = url.split('?')[0]
    window.location.replace(noQuery)
  })
}
