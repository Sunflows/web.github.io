/*
 * @Author: your name
 * @Date: 2020-12-28 20:35:14
 * @LastEditTime: 2020-12-28 20:45:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myweb-12.28\myweb18\src\App.js
 */
import './App.css';
import RouterView from './routes'
import routes from './routes/config'
function App() {
  return (
    <div className="App">
        <RouterView routes={routes}/>
    </div>
  );
}

export default App;
