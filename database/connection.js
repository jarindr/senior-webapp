
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_senior')

const facultyStatistic    = mongoose.model('graduate_stats', {_id:Number})
const foreignersStatistic = mongoose.model('foreigners_stats', {_id:Number})
const gradeStatistic      = mongoose.model('grade_stats', {_id:Number})
const bioStatistic        = mongoose.model('bio_stats', {_id:Number})

module.exports.facultyStatistic    = facultyStatistic
module.exports.foreignersStatistic = foreignersStatistic
module.exports.gradeStatistic      = gradeStatistic
module.exports.bioStatistic        = bioStatistic
