import { getPathName } from './url'
import SearchBox from '../component/SearchBox'

const main = async () => {
  window.addEventListener('load', async () => {
    const page = await getPathName()
    document.getElementById('root').append(page.render)
    await page.afterRender()
    console.log(getPathName())

    await new SearchBox().afterRender()
  })
  window.addEventListener('hashchange', async () => {
    document.getElementById('root').innerHTML = ''
    const page = await getPathName()
    document.getElementById('root').append(page.render)
    await page.afterRender()
  })
}

export default main
