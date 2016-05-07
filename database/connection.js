
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/db_senior')

const graduateStatistic = mongoose.model('graduate_stats', {_id:Number})

module.exports = graduateStatistic
