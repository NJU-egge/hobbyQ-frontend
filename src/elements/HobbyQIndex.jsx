import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'


// 兴趣圈界面
const HobbyQIndex = () => {
    async function fetchHobbyQData() {
      const response = await axios.get('http://localhost:7001/api/hobbyQ/get_all')
      const data = await Array.from(response.data);
      return data;
    }
  
  
    const params = useParams()
    const [hobbyQData, setHobbyQData] = useState([])
    useEffect(() => {
      fetchHobbyQData().then(data =>setHobbyQData(data))
    }, [])
  
    return (
      
      <div className='w-full bg-gray-100'>
        <div className='flex justify-end bg-sky-400 p-2'>
          <p>Hello, {params.username}！</p>
          <a href='/'>退出</a>
        </div>

        <div className='flex flex-wrap bg-sky-200 p-2'>
          <div className="flex w-1/5 justify-center flex-col bg-slate-500">
            <div className='flex flex-col bg-slate-200 p-2'>
                {
                  hobbyQData.map(item => (
                    <div key={item.hobbyQName}>
                      <div className='flex justify-around bg-slate-300 round-2xl p-2'>
                      {item.hobbyQName}
                      <a href={`/${params.username}/hobbyQ/${item.hobbyQName}`}>进入</a>
                    </div>
                    </div>
                    
                  ))
                }
            </div>
            <div className='flex justify-center bg-slate-200 p-2'>
              <form action='http://localhost:7001/api/hobbyQ/create' method='POST'>
                <label htmlFor='hobbyQName'>圈名：</label>
                <input type="text" id="hobbyQName" name="hobbyQName" required />
                <br />
                <button type="submit" onClick={()=> {window.location.href = `/${params.username}/hobbyQ`}}>创建</button>
              </form>
            </div>
          </div>  
            
          <div className="flex bg-green-100 justify-center w-4/5">
            输入圈名并创建
          </div> 
        </div>
        
      
        <div className='flex justify-center bg-slate-200 p-96'>
          contact us: 221900209@samil.nju.edu.cn
        </div>
      </div>
      
    )
  }
  
  export default HobbyQIndex