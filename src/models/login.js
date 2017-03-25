/*
* @Author: xhb
* @Date:   2017-03-25 15:35:04
* @Last Modified by:   xhb
* @Last Modified time: 2017-03-25 17:57:18
*/

import * as usersService from '../services/users';
import Logger from '../../utils/logger';
const logger = Logger.getLogger('Login');

export default {
  namespace: 'users',

  state: {

  },

  reducers: {

  },

  effects: {

    // 用户登录操作
    *login({payload}, {put, call, select}){
      handleSubmit = async(e) => {  // async可以配合箭头函数
        e.preventDefault();  // 这个很重要, 防止跳转
        this.setState({requesting: true});
        const hide = message.loading('正在验证...', 0);

        const username = this.state.username;
        const password = this.state.password;
        logger.debug('username = %s, password = %s', username, password);

        try {
          // 服务端验证
          const res = await ajax.login(username, password);
          hide();
          logger.debug('login validate return: result %o', res);

          if (res.success) {
            message.success('登录成功');
            // 如果登录成功, 触发一个loginSuccess的action, payload就是登录后的用户名
            this.props.handleLoginSuccess(res.data);
          } else {
            message.error(`登录失败: ${res.message}, 请联系管理员`);
            this.setState({requesting: false});
          }
        } catch (exception) {
          hide();
          message.error(`网络请求出错: ${exception.message}`);
          logger.error('login error, %o', exception);
          this.setState({requesting: false});
        }
      };
    },


  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

};
