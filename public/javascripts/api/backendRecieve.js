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

export function getGradeStats(subject,sortType) {
  return new Promise((resolve,reject)=>{
    $.get('api/getGradeStats/'+subject+'/'+sortType, (data)=> {

    })
    .done(function (data) {
      resolve(data)
    })
    .fail(function (err) {
      reject(err)
    })
  })
}
export function getAllBioStats(year) {
  return new Promise((resolve,reject)=>{
    $.get('api/getAllBioStats/'+year, (data)=> {
    })
    .done(function (data) {
      resolve(data)
    })
    .fail(function (err) {
      reject(err)
    })
  })
}
export function getAllGradeStats() {
  return new Promise((resolve,reject)=>{
    $.get('api/getAllGradeStats', (data)=> {

    })
    .done(function (data) {
      resolve(data)
    })
    .fail(function (err) {

      reject(err)
    })
  })
}
