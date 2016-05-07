export function getGraduateStats(GRAD) {
  GRAD = GRAD || 'GRAD1'
  return new Promise(function(resolve, reject){
    $.get('api/getGraduateStats/'+GRAD, (data)=> {
      console.log(data)
    })
    .done(function (data) {
      resolve(data)
    })
    .fail(function (err) {
      reject(err)
    })
  })
}
