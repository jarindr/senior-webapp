import { createHistory }  from 'history'
import { action } from '../actions/action.js'
const history = createHistory()

history.listen(function (location) {
  action.getRouteActions(location)
})

export function changeState(data){
  history.push({
    pathname: data.path,
    search: data.search||'',
  })
}
