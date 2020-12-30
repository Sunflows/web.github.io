import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
export default class index extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        axios({
            url:'./api/getList',
        }).then(res=>{
            this.setState({
                list:res.data.list
            })
        })
    }
    render() {
        const {list} =this.state
        return (
            <div className="moive">
                <header>光与影</header>
                <main>
                    <input type="text" placeholder="盗梦空间、你的名字"/>
                    {
                        list.map((item,index)=><dl key={index}>
                            <dt>
                                <img src={item.image} alt=""/>
                            </dt>
                            <dd>
                                {item.title}
                            </dd>
                        </dl>)
                    }
                </main>
            </div>
        )
    }
}
