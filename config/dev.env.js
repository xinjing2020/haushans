//此文件时开发环境配置文件
'use strict' //使用严格模式
const merge = require('webpack-merge') //合并对象
const prodEnv = require('./prod.env')

//导出
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OPEN_PROXY: true // 是否开启代理, 重置后需重启vue-cli
})
