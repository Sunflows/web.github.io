/*
 * @Author: your name
 * @Date: 2020-12-28 20:35:14
 * @LastEditTime: 2020-12-28 21:17:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myweb-12.28\myweb18\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './mock/index'
ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);
