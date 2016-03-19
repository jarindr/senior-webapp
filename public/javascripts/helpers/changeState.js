
import { createHistory }  from 'history'
const history = createHistory()

export function changeState(data){
  $(data.target).load(data.component, ()=> {
    history.push({
      pathname: data.path,
      search: data.search||''
    })
  })
}
