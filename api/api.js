var express = require('express')
var router = express.Router()

const facultyStatisticCollection    = require('../database/connection.js').facultyStatistic
const foreignersStatisticCollection = require('../database/connection.js').foreignersStatistic
const _                             = require('lodash')

const colors =   ["#4db6ac", "#4dd0e1", "#ab47bc", "#7e57c2", "#7986cb", "#42a5f5", "#4fc3f7",
"#b2ebf2", "#1de9b6", "#7798BF", "#d4e157",'#f57f17','#ffa726','#ff7043','#8d6e63','#9e9e9e','#78909c']


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

  facultyStatisticCollection.aggregate(group, function(err, agData){

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
    }).map(function (d,index) {
      return _.assign(d,{color:colors[index]})
    }))
  })

})


router.get('/getNumberStats/:faculty',function (req,res,next) {
  let group = null
  if(req.params.faculty === 'all'){
    group = [{
      $group: {
        _id: null,
        totalThai:{$sum:"$N_01"},
        total:{$sum:'$TOTAL'}
      }
    }]
  }else{

    group = [{
      $group: {
        _id: '$FACCODE',
        name:{$push:'$DEGREETHAI'},
        totalN00:{$sum:'$N_00'},
        totalN01:{$sum:'$N_01'},
        totalN02:{$sum:'$N_02'},
        totalN03:{$sum:'$N_03'},
        totalN04:{$sum:'$N_04'},
        totalN05:{$sum:'$N_05'},
        totalN06:{$sum:'$N_06'},
        totalN07:{$sum:'$N_07'},
        totalN08:{$sum:'$N_08'},
        totalN09:{$sum:'$N_09'},
        totalN10:{$sum:'$N_10'},
        totalN11:{$sum:'$N_11'},
        totalN12:{$sum:'$N_12'},
        totalN13:{$sum:'$N_13'},
        totalN14:{$sum:'$N_14'},
        totalN15:{$sum:'$N_15'},
        totalN16:{$sum:'$N_16'},
        totalN17:{$sum:'$N_17'},
        totalN18:{$sum:'$N_18'},
        totalN19:{$sum:'$N_19'},
        totalN20:{$sum:'$N_20'},
        totalN21:{$sum:'$N_21'},
        totalN22:{$sum:'$N_22'},
        totalN23:{$sum:'$N_23'},
        totalN24:{$sum:'$N_24'},
        totalN25:{$sum:'$N_25'},
        totalN26:{$sum:'$N_26'},
        totalN27:{$sum:'$N_27'},
        totalN28:{$sum:'$N_28'},
        totalN29:{$sum:'$N_29'},
        totalN30:{$sum:'$N_30'},
        totalN21:{$sum:'$N_21'},
        totalN22:{$sum:'$N_22'},
        totalN23:{$sum:'$N_23'},
        totalN24:{$sum:'$N_24'},
        totalN25:{$sum:'$N_25'},
        totalN26:{$sum:'$N_26'},
        totalN27:{$sum:'$N_27'},
        totalN28:{$sum:'$N_28'},
        totalN29:{$sum:'$N_29'},
        totalN30:{$sum:'$N_30'},
        totalN31:{$sum:'$N_31'},
        totalN32:{$sum:'$N_32'},
        totalN33:{$sum:'$N_33'},
        totalN34:{$sum:'$N_34'},
        totalN35:{$sum:'$N_35'},
        totalN36:{$sum:'$N_36'},
        totalN37:{$sum:'$N_37'},
        totalN38:{$sum:'$N_38'},
        totalN39:{$sum:'$N_39'},
        totalN40:{$sum:'$N_40'},
        totalN41:{$sum:'$N_41'},
        totalN42:{$sum:'$N_42'},
        totalN43:{$sum:'$N_43'},
        totalN44:{$sum:'$N_44'},
        totalN45:{$sum:'$N_45'},
        totalN46:{$sum:'$N_46'},
        totalN47:{$sum:'$N_47'},
        totalN48:{$sum:'$N_48'},
        totalN49:{$sum:'$N_49'},
        totalN50:{$sum:'$N_50'},
        totalN51:{$sum:'$N_51'},
        totalN52:{$sum:'$N_52'},
        totalN53:{$sum:'$N_53'},
        totalN54:{$sum:'$N_54'},
        totalN55:{$sum:'$N_55'},
        totalN56:{$sum:'$N_56'},
        totalN57:{$sum:'$N_57'},
        totalN58:{$sum:'$N_58'},
        totalN59:{$sum:'$N_59'},
        totalN60:{$sum:'$N_60'},
        totalN61:{$sum:'$N_61'},
        totalN62:{$sum:'$N_62'},
        totalN63:{$sum:'$N_63'},
        totalN64:{$sum:'$N_64'},
        totalN65:{$sum:'$N_65'},
        totalN66:{$sum:'$N_66'},
        totalN67:{$sum:'$N_67'},
        totalN68:{$sum:'$N_68'},
        totalN69:{$sum:'$N_69'},
        totalN70:{$sum:'$N_70'},
      }
    }]
  }


  foreignersStatisticCollection.aggregate(group, function(err, agData){

    if (err) return reject(err)
    let data = null
    if(req.params.faculty==='all'){
      data = [{
        name:'Thai',
        y:agData[0].total,
        color:colors[5],
        drilldown:'Foreigners'
      },{
        name:'Foreigners',
        y:agData[0].total - agData[0].totalThai,
        color:colors[15],
        drilldown:'Foreigners'
      }]
    }else if(req.params.faculty==='facs'){
      data = agData.map((d)=>{
        let temp = []
        for(key in d){
          if(d.hasOwnProperty(key)&&d[key]!=0){
            console.log(d.name[0])
            temp.push({fac:d.name[0],name:key,y:d[key]})
          }
        }
        return temp
      })
    }
    res.send(data)
  })

})
module.exports = router
