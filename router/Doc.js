import React,{useEffect} from 'react'
import {NavLink, Route, Redirect,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
    withRouter,
    Switch,
    Router
} from 'react-router-dom'
import { RouteWithSubRoutes } from './App';
import './doc.css'
// const DocContent = (props)=>{

//     return <h1>
//         {props.match.params.type}
//     </h1>
// }
const Doc = ({routes}) => {    
    return (
        <div className='doc'>
            <div className="content">
                <Switch>
                    {routes.map((route,i)=>(
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </Switch>

                {/* <Route path='/doc/:type' component={DocContent}/> */}
                <Redirect from='/doc' to='/doc/core'/>
            </div>
            <ol>
                <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                <li><NavLink to='/doc/api'>API</NavLink></li>
                <li><NavLink to='/doc/hooks'>Hooks</NavLink></li>
            </ol>
        </div>
    )
}



export default withRouter( Doc );