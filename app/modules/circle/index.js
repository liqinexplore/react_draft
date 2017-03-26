module.exports = {
    path: 'circle',
    breadcrumbName: "圈子",
    getComponent(nextState, callback) {
        require.ensure([], (require) => {

            callback(null, require('./components/circle.jsx')) //这个是跳转的面板
        })
    }
};
