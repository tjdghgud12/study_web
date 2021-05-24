const express = require('express')
const app = express()
const port = 5000
//const bodyParser = require('body-parser');
const config = require('./config/key');

const { User } = require("./models/User");


//bodyparser는  클라이언트로 부터 받은 데이터를 파싱하는 부분
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongodb Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello world!오라오라오라오라'))


app.post('/register', (req, res) => {
  //회원가입 정보를 db에 넣는 부분
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))