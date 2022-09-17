const mongoose = require('mongoose')

const ResumeSchema = mongoose.Schema({
  filename: String,
  author: String,
  email: String,
  number: String,
  appliedOn: String,
  content: [String],
})

module.exports = mongoose.model('Resumes', ResumeSchema)
