import {login} from '../api/user'
import clonedeep from 'lodash.clonedeep'
import {createHashHistory} from 'history'
import {message} from 'antd';

let history = createHashHistory()

export default {

    namespace: 'login',
  
    state: {
        authority: '',
        username: '',
    },
  
    effects: {
      *loginAsync({ payload }, { call, put }) {  // eslint-disable-line
        //console.log(payload)
        // login(payload).then(res=>{
        //     console.log({type: 'setusername', payload: payload.username});
        // });
        let p = yield call(login, payload)
        console.log(p)
        message.success(p.data.msg);
        yield put({type: 'setusername', payload: payload.username});
      },
    },
  
    reducers: {
      setusername(state, {payload: username}) {
        console.log(username);
        let stateChange = clonedeep(state);
        stateChange.authority =  username === 'admin' ? 'admin' : 'guest';
        stateChange.username = username;
        localStorage.setItem('token', true);
        localStorage.setItem('userinfo', JSON.stringify(stateChange));
        history.push('/');
        return stateChange;
      },

    },
  
  };
  