/*
 * @Author: your name
 * @Date: 2020-12-28 21:09:49
 * @LastEditTime: 2020-12-28 21:12:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myweb-12.28\myweb18\src\mock\index.js
 */
import Mock from 'mockjs'
Mock.mock('./api/getList',()=>{
    return Mock.mock({
        "list|5":[
            {
                "image":"@image(100x100,@color)",
                "title":"@ctitle(5,7)",
                "score|9":8,
            }
        ]
    })
})