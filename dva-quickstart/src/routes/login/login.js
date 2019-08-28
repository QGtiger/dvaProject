import React from 'react';
import LoginForm from '../../components/login/loginForm';
import styles from  './login.css';
import { connect } from 'dva';

class Login extends React.Component{
    constructor(props){
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount(){
        //console.log(this.props.userinfo);
        // this.props.dispatch({
        //     type: 'login/loginAsync',
        //     payload: {
        //         username: 'admin',
        //         password: 'admin'
        //     }
        // })
    }

    handleLogin({username, password}){
        this.props.dispatch({
            type: 'login/loginAsync',
            payload: {
                username,
                password
            }
        })
    }

    render(){
        return (
            <div className={styles.login}>
                <div className="login-form">
                    <LoginForm handleLogin={this.handleLogin}/>
                </div>
            </div>
        )
    }
}

export default connect(state => {
    console.log(state.login)
    return {userinfo: state.login}
})(Login);