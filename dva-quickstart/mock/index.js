const Mock = require('mockjs');
 
let db = Mock.mock({
    status: 200,
    msg: '登录成功'
});


let failed = Mock.mock({
    status: 201,
    msg: '登录失败，密码必须是admin'
})

module.exports = {
    [`POST /api/login`](req, res) {
        let body = req.body;
        if(body.password === 'admin'){
            res.status(200).json(db);
        }else{
            res.status(201).json(failed);
        }
    },
}