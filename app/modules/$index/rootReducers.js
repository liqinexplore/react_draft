import { combineReducers } from 'redux' // 利用combineReducers 合并reducers
import { routerReducer } from 'react-router-redux' // 将routerReducer一起合并管理

import circle from '../circle/reducers' //新闻菜单下的store


export default combineReducers({
circle
})
