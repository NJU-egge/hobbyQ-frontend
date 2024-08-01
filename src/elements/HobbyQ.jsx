import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'

const HobbyQ = () => {
    const params = useParams()
    async function fetchTitleData() {
      const response = await axios.get(`http://localhost:22209/api/hobbyQ/select/?hobbyQName=${params.hobbyQName}`)
      const data = await Array.from(response.data);
      return data;
    }

    const [titleData, setTitleData] = useState([])
    useEffect(() => {
      fetchTitleData().then(data =>setTitleData(data))
    }, [])
  
    function handleSubmit() {
    
      console.log('submit')
  
      axios.post('http://localhost:22209/api/note/post' , {
        hobbyQName: params.hobbyQName,  
        title: document.getElementById('title').value,
        note: document.getElementById('note').value,
        username: params.username
      })
        .then((response) => {
           
          console.log(response)
          window.location.href = `/hobbyQ-frontend/${params.username}/hobbyQ/${params.hobbyQName}`
          
        })
    }

    async function fetchHobbyQData() {
      const response = await axios.get("http://localhost:22209/api/hobbyQ/get_all")
      const data = await Array.from(response.data);
      return data;
    }
    const [hobbyQData, setHobbyQData] = useState([])
    useEffect(() => {
      fetchHobbyQData().then(data =>setHobbyQData(data))
    }, [])


    async function fetchHotData() {
      const response = await axios.get(`http://localhost:22209/api/hot/select/?hobbyQName=${params.hobbyQName}`)
      const data = await Array.from(response.data);
      return data;
    }
    const [hotData, setHotData] = useState([])
    useEffect(() => {
      fetchHotData().then(data =>setHotData(data))
    }, [])
  
    return (
      <div className='w-full bg-gray-100'>
        <div className='flex flex-wrap bg-sky-400 p-2'>
          <div className='flex w-1/2 justify-start p-2'>
            <button onClick={()=> {window.location.href = `/hobbyQ-frontend/${params.username}/hobbyQ`}}>首页</button>
          </div>
          <div className='flex w-1/2 justify-end p-2'>
            <p>Hello, {params.username}！</p>
            <a href='/hobbyQ-frontend/'>退出</a>
          </div>
        </div>

        <div className='flex flex-wrap bg-sky-200 p-2'>
          <div className="flex w-1/5 justify-center flex-col bg-slate-500">
            <div className='flex flex-col bg-slate-200 p-2'>
                {
                  hobbyQData.map(item => (
                    <div key={item.hobbyQName}>
                      <div className='flex justify-around bg-slate-300 round-2xl p-2'>
                        
                        {item.hobbyQName}
                        <a href={`/hobbyQ-frontend/${params.username}/hobbyQ/${item.hobbyQName}`}>进入</a>
                      </div>
                    </div>
                    
                  ))
                }
            </div>
            
            
          </div>
          
          <div className="flex w-1/5 flex-start flex-col bg-slate-500">
            <div className='flex flex-col bg-slate-200 p-2'>
              {
                titleData.map(item => (
                  <div key={item.title}>
                    <div className='flex justify-around bg-slate-300 round-2xl p-2'>
                      
                      {item.title}
                      <a href={`/hobbyQ-frontend/${params.username}/hobbyQ/${item.hobbyQName}/${item.title}`}>查看</a>
                    </div>
                  </div>
                  
                ))
                
              }
            </div>
            
          
          </div>
          
          <div className="flex bg-green-100 justify-center w-3/5">
              <div className='flex flex-col justify-evenly bg-slate-200 p-2'>
                <h1>Welcome to {params.hobbyQName}!</h1>
                <h>发帖规则：标题和内容必填，标题不可以和已有标题重复</h>
                
                <input type="text" id="title" name="title" className='w-full h-11 bg-slate-800' placeholder='请输入标题' required />
                
                <input type="text" id="note" name="note" className='w-full h-11 bg-slate-500' placeholder='请输入内容' required />
              
                <button onClick={()=>handleSubmit()}>发帖</button>
              
            </div>
            <div>
              <h>活跃度</h>
              {
                hotData.map(item => (
                  <div key={item.username}>
                    <div className='flex justify-around bg-slate-300 round-2xl p-2'>
                      <p>{item.username}</p>
                      <p>{item.hot}</p>
                      
                    </div>
                  </div>
                  
                ))
                
              }
            </div>
          </div> 
        </div>
        
      
        <div className='flex justify-center bg-slate-200 px-96 py-4'>
          contact me : 221900209@smail.nju.edu.cn
        </div>
      </div>
      )
    }

    

    export default HobbyQ