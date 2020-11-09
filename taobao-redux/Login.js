import React from 'react'
import {connect} from 'react-redux'
import {login} from './actionCreators'
import './css/login.css'
const Login = (props) => {
    return (
        <div>
            <div className='login'>您需要登录才能继续访问
                <span onClick = {() => props.history.push('/')}>关闭</span>
            </div>
            <div className='logo'></div>
            <div className='login-form'>
                <form>
                    <div>
                        <input type='text' className='user' placeholder='手机号/邮箱/用户名'></input>
                    </div>
                    <div>
                        <input type='password' className='password' placeholder='请输入登录密码'></input>
                    </div>
                </form>
            </div>
            {
                <button 
                    className='login-btn'
                    onClick = {() => {
                        props.dispatch(login())
                        props.history.push('/cart')
                    }}
                >登录</button>
            }
        </div>
    )
}


export default connect()(Login)
