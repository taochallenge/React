//路由配置的文件
import Home from './Home';
import Doc from './Doc';
import Tuto from './Tuto';
import Blog from './Blog';
import Comm from './Comm';
import Login from './Login';
import Core from './Core';
import Guide from './Guide';
import Api from './Api';
import Hooks from './Hooks'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/doc',
        component: Doc,
        // pri: true,
        routes: [
            {
                path: '/doc/core',
                component: Core,
            },
            {
                path: '/doc/guide',
                component: Guide,
                pri: true,
            },
            {
                path: '/doc/api',
                component: Api,
            },
            {
                path: '/doc/hooks',
                component: Hooks,
            },
        ]
    },
    {
        path: '/tuto',
        component: Tuto,
        pri: true
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/comm',
        component: Comm
    },
    {
        path: '/login',
        component: Login
    }
]

export default routes;