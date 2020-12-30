/*
 * @Author: your name
 * @Date: 2020-12-28 20:34:12
 * @LastEditTime: 2020-12-28 20:59:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myweb-12.28\routes\index.js
 */
import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
const RouterView=(props)=>{
    return <Switch>
        {
            props.routes.map((item,index)=>item.path?
            <Route
            key={index}
            path={item.path}
            render={(pro)=><item.component routes={item.children?item.children:[]} {...pro}>
                <RouterView routes={item.children?item.children:""} {...pro}/>
            </item.component>}
            />:
            <Redirect key={index} {...item}/>)
        }
    </Switch>
}
export default RouterView