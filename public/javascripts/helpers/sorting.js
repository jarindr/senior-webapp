export function sort(arr,type) {
  return type === 'asc'
  ? arr.sort(function (a, b) {
    if (a.y < b.y) {
      return 1;
    }
    if (a.y > b.y) {
      return -1;
    }
    return 0;
  })
  : arr.sort(function (a, b) {
    if (a.y > b.y) {
      return 1;
    }
    if (a.y < b.y) {
      return -1;
    }
    return 0;
  })
}
