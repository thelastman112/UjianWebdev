import MoviesPage from '../pages/MoviesPage'
import TVPage from '../pages/TVPage'

export const getPathName = async () => {
  if (window.location.pathname === '/') {
    window.location.replace('/#/')
  }
  const path = window.location.href.replace(`${window.location.origin}/#`, '').split('?')[0]

  if (path === '/' || path === '/movies') {
    return {
      render: new MoviesPage(),
      afterRender: new MoviesPage().afterRender
    }
  } else if (path === '/tv') {
    return {
      render: new TVPage(),
      afterRender: new TVPage().afterRender
    }
  }

  //   router[path]
  return '404'
}
