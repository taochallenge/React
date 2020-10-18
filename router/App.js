import React from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
import Header from './Header';
import routes from './router.config';
// 路由基本配置
// 路由传参(以及获取参数-props)
// 动态路由(/:page)
// js跳转
// 权限路由
// npm i antd-mobile --registry https://

function PrivateRoute({ component: Com, ...rest }) {
	return (
		<Route
			{ ...rest }
			render={ ({ location }) =>
				localStorage.getItem('userinfo')
					? <Com {...rest}/>
					: (
						<Redirect
							to={ {
								pathname: "/login",
								state: location
							} }
						/>
					)
			}
		/>
	);
}

function RouteWithSubRoutes(route){
	if(route.pri){
		return <PrivateRoute {...route}/>
	}
	return (
        <Route
            path={route.path}
            render={props => (
				<route.component
				{...props} 
				routes={route.routes} />
            )}
        />
    )
}

const App = () => {
	return <Router>
		<Header />
		<Switch>
			{
				routes.map((route,i)=>(
					<RouteWithSubRoutes key={i} {...route}/>
				))
			}
		</Switch>
	</Router>
}

export default App;
export {RouteWithSubRoutes}
