/*
* @Author: xhb
* @Date:   2017-03-25 14:47:11
* @Last Modified by:   xhb
* @Last Modified time: 2017-03-25 15:25:40
*/

module.exports = {

  // app 名称配置
  name: "SangforHOLabs 在线云测试",

  // 日志配置
  log: {

    // 全局控制的日志级别
    // 日志级别, 目前支持debug/info/warn/error 4种级别
    level: 'info',

    // 除了root logger以外, 也可以为每个logger单独设置级别
    debug: [],
    info: [],
    warn: [],

    // 示例, 对于loggerA和loggerB使用error级别, 其他logger使用默认的info级别
    error: ['loggerA', 'loggerB'],

  },

};
