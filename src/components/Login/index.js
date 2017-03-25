/*
* @Author: xhb
* @Date:   2017-03-25 15:11:31
* @Last Modified by:   xhb
* @Last Modified time: 2017-03-25 17:57:12
*/

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import globalConfig from '../../config';
import {message} from 'antd';
import './index.less';

/**
 * 定义登录组件
 */
class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',  // 当前输入的用户名
      email: '', // 用户邮箱地址
      pswd: '',  // 当前输入的密码
      requesting: false, // 当前是否正在请求服务端接口
    };
  }

  // 把用户名密码存进 state
  handleUsernameInput = (e) => {
    this.setState({name: e.target.value});
  };

  handlePasswordInput = (e) => {
    this.setState({pswd: e.target.value});
  };

  // 提交数据
  handleSubmit(){

    this.setState({requesting: true});

    let submitData = {
      "name": this.state.name,
      "pswd": this.state.pswd
    };

    if(this.props.handleLoginSubmit(submitData)){
      this.props.tellLoginStatus(true);
    }else{
      this.pros.tellLoginStatus(false);
    };

    this.setState({requesting: false});
  }

  render() {
    // 整个组件被一个id="loginDIV"的div包围, 样式都设置到这个div中
    return (
      <div id="loginDIV">
        <div className="login">
          <h1>{globalConfig.name}</h1>
          <form onSubmit={this.handleSubmit}>
            <input className="login-input" type="text" value={this.state.username}
                   onChange={this.handleUsernameInput} placeholder="用户名" required="required"/>
            <input className="login-input" type="password" value={this.state.password}
                   onChange={this.handlePasswordInput} placeholder="密码" required="required"/>
            <button className="btn btn-primary btn-block btn-large"
                    type="submit" disabled={this.state.requesting}>
              登录
            </button>
          </form>
        </div>

      </div>
    );
  }

}

// 属性声明
Login.propTypes = {
  // 接受一个提交登录数据的函数
  handleLoginSubmit: PropType.func,
  // 接收一个处理登录状态的函数

}

export default Login;
