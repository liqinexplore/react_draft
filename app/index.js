// import Hello from'./Hello.jsx';
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute,Link } from 'react-router';
import Home from './modules/Home';
import Dashboard from './modules/Dashboard';
import NotFound from './modules/NotFound';


import {combineReducers} from 'redux';
import { Provider } from 'react-redux'; // 利用Provider可以使我们的 store 能为下面的组件所用
import { syncHistoryWithStore } from 'react-router-redux'; // 利用react-router-redux提供的syncHistoryWithStore我们可以结合store同步导航事件
import { routerReducer } from 'react-router-redux';
import rootData from './modules/$index/rootReducers'; // 引入reducers集合
import finalCreateStore from './modules/$index/configureStore';  //引入增强后的store
import DevTools from './modules/$index/devtools';  // 引入Redux调试工具DevTools

const routerConfig = [
    {
path: '/',
component: Dashboard, //默认面板
indexRoute: { component: Home },//当刚开始进入，什么路由也没有的时候加载
breadcrumbName:'首页',
childRoutes: [
require('./modules/circle')//子路由地址
]
    },
{
path: '*',
component: Dashboard,
indexRoute:{component:NotFound}//当什么路由地址没有的时候加载
}
];


//连接redux和react-router
const reducer = combineReducers({
rootData,
routing: routerReducer
});
// 给增强后的store传入reducer
const store = finalCreateStore(reducer);
// 创建一个增强版的history来结合store同步导航事件
const sharpHistory = syncHistoryWithStore(hashHistory, store);
//给输出store，给redux
export const getStore=()=>{

  return store;//获取store
}
render((
  <Provider store={store}>
        <div>
          <Router  history={sharpHistory} routes={routerConfig} />
        
        </div>
      </Provider>

), document.getElementById('app'));
