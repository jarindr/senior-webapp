let index = 0
function createItem(item) {
  const theItem =
  '<li id='+item+'>'+
  '<input type="checkbox" class="filled-in" id='+index+' checked="checked" />'+
  '<label for='+index+'>'+item+'</label>'+
  '</li>'
  index++
  return theItem
}
export function createCheckboxList(items) {
  let list = ''
  for(const item of items){

    list = list + createItem(item)
  }
  return list
}
