import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'


const Note = () => {
    
  const params = useParams()
   
  //
  // 函数分别获取兴趣圈、标题、笔记、评论数据，以及评论提交
  //

  // 获取兴趣圈数据
  async function fetchHobbyQData() {
    const response = await axios.get('http://localhost:22209/api/hobbyQ/get_all')
    const data = await Array.from(response.data);
    return data;
  }
  const [hobbyQData, setHobbyQData] = useState([])
  useEffect(() => {
    fetchHobbyQData().then(data =>setHobbyQData(data))
  }, [])

  // 获取标题数据
  async function fetchTitleData() {
    const response = await axios.get(`http://localhost:22209/api/hobbyQ/select/?hobbyQName=${params.hobbyQName}`)
    const data = await Array.from(response.data);
    return data;
  }
  const [titleData, setTitleData] = useState([])
  useEffect(() => {
    fetchTitleData().then(data =>setTitleData(data))
  }, [])

  // 获取帖子数据
  async function fetchNoteData() {
    const response = await axios.get(`http://localhost:22209/api/note/select/?title=${params.title}&hobbyQName=${params.hobbyQName}`)
    const data = await Array.from(response.data);
    return data;
  }
  const [noteData, setNoteData] = useState([])
  useEffect(() => {
    fetchNoteData().then(data =>setNoteData(data))
  }, [])
  
  // 获取评论数据
  async function fetchCommentData() {
    const response = await axios.get(`http://localhost:22209/api/comment/select/?title=${params.title}&hobbyQName=${params.hobbyQName}`)
    const data = await Array.from(response.data);
    return data;
  }
  const [commentData, setCommentData] = useState([])
  useEffect(() => {
    fetchCommentData().then(data =>setCommentData(data))
  }, [])

  // 评论提交
  function handleSubmit() {
    console.log('submit')
    axios.post('http://localhost:22209/api/comment/post' , {
      hobbyQName: params.hobbyQName,  
      title: params.title,
      comment: document.getElementById('comment').value,
      username: params.username
    })
    window.location.href = `/hobbyQ-frontend/${params.username}/hobbyQ/${params.hobbyQName}/${params.title}` 
  }
    
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
        <div className="flex w-1/5 flex-start flex-col bg-slate-500">
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
          <div className='flex flex-col bg-slate-200 p-2'>
            <div>
              <div className='flex justify-center bg-slate-300 round-2xl p-2'>
                <h2>标题：{params.title}</h2>
                <h2>发帖内容：</h2>
              
                {
                  noteData.map(item => (
                    <div key={item.title}>             
                      {item.note}
                      <br />  
                      作者：{item.username}
                    </div>
                  ))
                }
              </div>
              
              <div className='flex flex-col bg-slate-400 round-2xl p-2'>
                <h2>评论：</h2>
                {
                  commentData.map(item => (
                    <div key={item.comment} className='flex flex-row bg-slate-500 round-2xl p-2'> 
                      
                      <div className='flex flex-start bg-sky-50 p-2'>
                        {item.username}：
                      </div>    
                      <div className='flex flex-end  bg-sky-200 p-2'>
                        {item.comment}
                      </div>           
                    </div>
                  ))
                }
              </div>

              <div className='flex flex-row justify-center  bg-blue-600 p-2'> 
                <input type="text" id="comment" name="comment" placeholder="天青色等烟雨，评论区等你" 
                 className='bg-slate-200 rounded-lg h-12 w-96' required />
                <button onClick={()=>handleSubmit()} className='bg-slate-200 rounded-lg h-12 w-16'>评论</button>       
              </div>      
              
            </div>
          </div>
        </div> 
      </div>
      <div className='flex justify-center bg-slate-200 px-96 py-4'>
        contact me : 221900209@samil.nju.edu.cn
      </div>
    </div>
  )  
}

  export default Note;