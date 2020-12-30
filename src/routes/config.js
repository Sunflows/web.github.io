/*
 * @Author: your name
 * @Date: 2020-12-28 20:34:10
 * @LastEditTime: 2020-12-28 20:52:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myweb-12.28\routes\config.js
 */
import Read from '../pages/read/index'
import Moive from '../pages/moive/index'
import Layout from '../pages/layout/index'
const routes = [
    {
        path: '/layout',
        component: Layout,
        children: [
            {
                path: '/layout/read',
                component: Read,
                title:'阅读'
            },
            {
                path: '/layout/moive',
                component: Moive,
                title:'电影'
            },
        ]
    },

    {
        from: '/',
        to: '/layout',
    }
]
export default routes;