export function getGraduateStats(GRAD) {
  GRAD = GRAD || 'GRAD1'
  return new Promise(function(resolve, reject){
    $.get('api/getGraduateStats/'+GRAD, (data)=> {
    })
    .done(function (data) {
      resolve(data)
    })
    .fail(function (err) {
      reject(err)
    })
  })
}

export function getForeignersStats() {

  return new Promise(function(resolve, reject){
    $.get('api/getNumberStats/facs', (data)=> {

    })
    .done(function (data) {
      resolve(data)
    })
    .fail(function (err) {
      reject(err)
    })
  })

}