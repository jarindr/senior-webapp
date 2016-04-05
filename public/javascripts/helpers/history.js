import { createHistory }  from 'history'
import { getRouteActionsPush , getRouteActionsPop } from '../actions/action.js'

const history = createHistory()

history.listen(function (location) {
  location.action === 'POP'
  ? getRouteActionsPop(location)
  : getRouteActionsPush(location)
})

export function changeState(data){
  history.push({
    pathname: data.path,
    search: data.search||'',
  })
}
