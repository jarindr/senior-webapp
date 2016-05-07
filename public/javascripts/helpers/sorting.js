export function sort(arr,type) {
  if(type==='asc'){
    return   arr.sort(function (a, b) {
      if (a.y < b.y) {
        return 1;
      }
      if (a.y > b.y) {
        return -1;
      }
      return 0;
    })
  }else if(type==='dsc'){
    return   arr.sort(function (a, b) {
      if (a.y > b.y) {
        return 1;
      }
      if (a.y < b.y) {
        return -1;
      }
      return 0;
    })
  }else{
    return arr
  }

}
