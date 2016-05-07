var express = require('express')
var router = express.Router()
const graduateStatsCollection = require('../database/connection.js')


router.get('/getGraduateStats/:GRAD',function (req,res,next) {
  var group = [{
    $group: {
      _id: '$FACCODE',
      name:{$push:'$FACNAME'},
      RETIRED:{$sum:'$RETIRE'},
      GRAD1: {$sum: '$GRAD1'},
      GRAD2: {$sum: '$GRAD2'},
      GRAD3:{$sum:'$GRAD3'},
      RESIGN:{$sum:'$RESIGN'},
      total:{$sum:'$TOT_1'}
    }
  }]

  graduateStatsCollection.aggregate(group, function(err, agData){

    if (err) return def.reject(err)

    res.send( agData.map((fac)=>{
      if(req.params.GRAD=='GRAD1'){

        return {name:fac.name[0],y:fac.GRAD1/fac.total}

      }else if(req.params.GRAD=='GRAD2'){

        return {name:fac.name[0],y:fac.GRAD2/fac.total}

      }else if(req.params.GRAD=='GRAD3'){
        return {name:fac.name[0],y:fac.GRAD3/fac.total}

      }else if(req.params.GRAD=='RETIRED'){
        return {name:fac.name[0],y:fac.RETIRED/fac.total}
      }else if(req.params.GRAD=='RESIGN'){
        return {name:fac.name[0],y:fac.RESIGN/fac.total}

      }else{
        return {name:fac.name[0],y:(fac.GRAD1+fac.GRAD2+fac.GRAD3)/fac.total}
      }
    }))
  })

})
module.exports = router
