const { json } = require("body-parser");
const { User } = require("../models/User");

let auth = (req, res, next) => {
    //인증 처리를 여기서 함 
    //1. 클라이언트 쿠키에서 토큰을 가져옴
    let token = req.cookies.x_auth;
    //2. 토큰을 디코드(복호화)한 후 유저를 찾는다.
    User.findByToken(token, (err, user)=>{
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error: true})
        req.token = token;
        req.user = user;
        next();
    })
    //3. 유저가 있으면 있으면 인증 ok
    //4. 유저가 없으면 인증 no
}

module.exports = {auth}