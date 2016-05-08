
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_senior')

const facultyStatistic = mongoose.model('graduate_stats', {_id:Number})
const foreignersStatistic = mongoose.model('foreigners_stats', {_id:Number})

module.exports.facultyStatistic    = facultyStatistic
module.exports.foreignersStatistic = foreignersStatistic
