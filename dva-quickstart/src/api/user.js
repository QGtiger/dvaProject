import request from '../utils/request';

//登录用户
export const login = ({username, password}) => {
    const data = {
        username,
        password
    };
    return request({
        url: '/api/login',
        method: 'post',
        data,
    })
}