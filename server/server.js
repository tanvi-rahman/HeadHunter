const express = require('express')
var cors = require('cors')
const fileUpload = require('express-fileupload')
const pdfParse = require('pdf-parse')
const bcrypt = require('bcrypt')

const Resume = require('./models/resume')
const User = require('./models/user')

const app = express()
app.use(cors())

app.use(express.json())

require('./database')()

// default options
app.use(fileUpload())

// checking for working server
app.get('/', function (req, res) {
  res.send('<h1>Hello World</h1>')
})

// get all resumes
app.get('/resumes', async function (req, res) {
  try {
    const resumes = await Resume.find()
    res.send(resumes)
  } catch (err) {
    res.send({ message: err })
  }
})

// get filtered search results by keyword
app.get('/resumes/:keyword', async function (req, res) {
  try {
    const resumes = await Resume.find({ content: req.params.keyword })
    res.send(resumes)
  } catch (err) {
    res.send({ message: err })
  }
})

// user signup
app.post('/signup', async function (req, res) {
  try {
    const hashedPw = await bcrypt.hash(req.body.password, 10)
    const user = new User({
      email: req.body.email,
      password: hashedPw,
    })
    res.send(await user.save())
  } catch (err) {
    res.send({ message: err })
  }
})

// user login
app.get('/login', async function (req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password)) {
        res.send({ isLoggedin: true, message: 'Login successful' })
      } else {
        res.send({ isLoggedin: false, message: 'Incorrect password' })
      }
    } else {
      res.send({ isLoggedin: false, message: 'Email does not exist' })
    }
  } catch (err) {
    res.send({ message: err })
  }
})

// handles upload of ONE file
app.post('/upload', function (req, res) {
  let sampleFile
  let uploadPath
  let pdfArr = []

  // regex to remove all punctuation except for single quote
  const regex = /[!"#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g

  // checks if no file was uploaded
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.')
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile
  //console.log(sampleFile)
  uploadPath = __dirname + '/files/' + sampleFile.name

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    // if error, return error
    if (err) return res.status(500).send(err)

    // if no error, parse pdf and return data/use stored data
    pdfParse(sampleFile).then(result => {
      // removes punctuation from entire file
      let withoutPunctuation = result.text.replace(regex, '')

      // removes all \n from entire file
      withoutPunctuation = withoutPunctuation
        .replace(/(\r\n|\n|\r)/gm, '')
        .toLocaleLowerCase()

      // splits file into an array of words
      pdfArr = withoutPunctuation.split(' ')

      // remove singular random characters
      pdfArr = pdfArr.map(word => {
        if (word.length !== 1) {
          return word
        }
      })

      // remove null elements created by removing elements with only one character
      pdfArr = pdfArr.filter(word => {
        if (word !== undefined) {
          return word
        }
      })

      // removes random in pdf || more can be added later
      pdfArr = pdfArr.filter(element => {
        return element !== '' && element !== '.' && element !== '·'
      })

      // send pdf data to database
      const resume = new Resume({
        filename: sampleFile.name,
        content: pdfArr,
        author: req.body.author,
        email: req.body.email,
        number: req.body.number,
        appliedOn: new Date().toLocaleDateString(),
      })
      resume.save().then(res.send())

      // UNCOMMENT || COMMENT FOR TESTING
      // console.log(pdfArr)
    })

    res.send('File uploaded!')
  })
})

PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`)
})
