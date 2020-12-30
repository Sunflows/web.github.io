import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'
export default class index extends Component {
    render() {
        return (
            <div className="layout">
                <main>
                      {this.props.children}
                </main>
                <footer> 
                    {this.props.routes.map((item,index)=><li key={index}>
                        <NavLink to={item.path}>{item.title}</NavLink>
                    </li>)}
                 
                </footer>
            </div>
        )
    }
}
