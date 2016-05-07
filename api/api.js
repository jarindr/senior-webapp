var express = require('express')
var router = express.Router()
const graduateStatsCollection = require('../database/connection.js')


router.get('/getGraduateStats/:GRAD',function (req,res,next) {
  var group = [{
    $group: {
      _id: '$FACCODE',
      name:{$push:'$FACNAME'},
      GRAD1: {$sum: '$GRAD1'},
      GRAD2: {$sum: '$GRAD2'},
      GRAD3:{$sum:'$GRAD3'},
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

      }else{

        return {name:fac.name[0],y:fac.GRAD3/fac.total}
      }
    }))
  })

})
module.exports = router
