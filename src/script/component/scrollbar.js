export const scrollBarWheel = e => {
  document.getElementById('popular').addEventListener('wheel', (e) => {
    e.preventDefault()
    document.querySelector('#popular').scrollLeft += e.deltaY
  })
  document.getElementById('toprated').addEventListener('wheel', (e) => {
    e.preventDefault()
    document.querySelector('#toprated').scrollLeft += e.deltaY
  })
  document.getElementById('upcoming').addEventListener('wheel', (e) => {
    e.preventDefault()
    document.querySelector('#upcoming').scrollLeft += e.deltaY
  })
}
