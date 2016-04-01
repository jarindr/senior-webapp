import { createHistory }  from 'history'
import { getRouteActions } from '../actions/action.js'

const history = createHistory()

history.listen(function (location) {
  getRouteActions(location)
})

export function changeState(data){
  history.push({
    pathname: data.path,
    search: data.search||'',
  })
}
