import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'

const HobbyQ = () => {
    const params = useParams()
    async function fetchTitleData() {
      const response = await axios.get(`http://localhost:7001/api/hobbyQ/select/?hobbyQName=${params.hobbyQName}`)
      const data = await Array.from(response.data);
      return data;
    }
    const [titleData, setTitleData] = useState([])
    useEffect(() => {
      fetchTitleData().then(data =>setTitleData(data))
    }, [])
  
    function handleSubmit() {
    
      console.log('submit')
  
      axios.post('http://localhost:7001/api/note/post' , {
        hobbyQName: params.hobbyQName,  
        title: document.getElementById('title').value,
        note: document.getElementById('note').value,
        username: params.username
      })
        .then((response) => {
           
          console.log(response)
          window.location.href = `/${params.username}/hobbyQ/${params.hobbyQName}`
          
        })
    }

    async function fetchHobbyQData() {
      const response = await axios.get('http://localhost:7001/api/hobbyQ/get_all')
      const data = await Array.from(response.data);
      return data;
    }
  
  

    const [hobbyQData, setHobbyQData] = useState([])
    useEffect(() => {
      fetchHobbyQData().then(data =>setHobbyQData(data))
    }, [])
  
    return (
      /* <div>
        <h1>Welcome to {params.hobbyQName}!</h1>
  
        <label htmlFor='title'>标题：</label>
        <input type="text" id="title" name="title" required />
        <br />  
        <label htmlFor='note'>发帖内容：</label>
        <input type="text" id="note" name="note" required />
        <br />
        <button onClick={()=>handleSubmit()}>发帖</button>
        <div>
          {
            titleData.map(item => (
              <div key={item.title}>
                {item.title}
                <a href={`/${params.username}/hobbyQ/${item.hobbyQName}/${item.title}`}>查看</a>
              </div>
            ))
          }
        </div>
      </div> */

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
              <div>
                <h1>Welcome to {params.hobbyQName}!</h1>
        
                <label htmlFor='title'>标题：</label>
                <input type="text" id="title" name="title" required />
                <br />  
                <label htmlFor='note'>发帖内容：</label>
                <input type="text" id="note" name="note" required />
                <br />
                <button onClick={()=>handleSubmit()}>发帖</button>
              <div>
                {
                  titleData.map(item => (
                    <div key={item.title}>
                      {item.title}
                      <a href={`/${params.username}/hobbyQ/${item.hobbyQName}/${item.title}`}>查看</a>
                    </div>
                  ))
                }
              </div>
            </div>
          </div> 
        </div>
        
      
        <div className='flex justify-center bg-slate-200 p-96'>
          contact us: 221900209@samil.nju.edu.cn
        </div>
      </div>
      )
    }

    

    export default HobbyQ