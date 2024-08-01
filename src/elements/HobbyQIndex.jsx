import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'


// 兴趣圈界面
const HobbyQIndex = () => {
    async function fetchHobbyQData() {
      const response = await axios.get('http://localhost:22209/api/hobbyQ/get_all')
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
        <div className='flex flex-wrap bg-sky-400 p-2'>
          <div className='flex w-1/2 justify-start p-2'>
            <button onClick={()=> {window.location.href = `/hobbyQ-frontend/#/${params.username}/hobbyQ/`}}>首页</button>
          </div>
          <div className='flex w-1/2 justify-end p-2'>
            <p>Hello, {params.username}！</p>
            <a href='/hobbyQ-frontend/#/'>退出</a>
          </div>
        </div>

        <div className='flex flex-wrap bg-sky-200 p-2'>
          <div className="flex w-1/5 justify-start flex-col ">
            <div className='flex flex-col  bg-slate-200 p-2'>
                {
                  hobbyQData.map(item => (
                    <div key={item.hobbyQName}>
                      <div className='flex justify-around bg-slate-300 round-2xl p-2'>
                      {item.hobbyQName}
                      <a href={`/hobbyQ-frontend/#/${params.username}/hobbyQ/${item.hobbyQName}`}>进入</a>
                    </div>
                    </div>
                    
                  ))
                }
            </div>
            
          </div>  
            
          <div className="flex flex-col justify-evenly w-4/5">
            <div className='flex bg-green-300  justify-center  px-2 py-8'>
              <h1 className='w-1/3'>欢迎!</h1>
              <h className='w-2/3'>
                这里是你和各位同好的兴趣圈，
                <br />
                你可以在这里创建自己的兴趣圈，分享你的兴趣爱好，与其他人一起交流。
                <br />
                创圈规则：圈名不得超过9个字，圈名不得和已有圈名重复
              
              </h>
            </div>
            <div className='flex justify-center bg-slate-200 px-2 py-8'>
              <form action='http://localhost:22209/api/hobbyQ/create' method='POST'>
                <label htmlFor='hobbyQName'>圈名：</label>
                <input type="text" id="hobbyQName" name="hobbyQName" required />
                <br />
                <br />
                <button type="submit" className='bg-sky-500 hover:bg-sky-700 text-white font-bold p-2 rounded text-xl ' onClick={()=> {window.location.href = `/hobbyQ-frontend/#/${params.username}/hobbyQ`}}>创建</button>
              </form>
            </div>
          </div> 

        </div>
        
      
        <div className='flex justify-center bg-slate-200 px-96 py-1'>
          contact me : 221900209@samil.nju.edu.cn
        </div>
      </div>
      
    )
  }
  
  export default HobbyQIndex