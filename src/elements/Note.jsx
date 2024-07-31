import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'


const Note = () => {
    const params = useParams()
    
    
    async function fetchNoteData() {
      const response = await axios.get(`http://localhost:7001/api/note/select/?title=${params.title}&hobbyQName=${params.hobbyQName}`, )
      
      const data = await Array.from(response.data);
      
      return data;
    }
    const [noteData, setNoteData] = useState([])
    useEffect(() => {
      fetchNoteData().then(data =>setNoteData(data))
    }, [])
    
    function handleSubmit() {
      
      console.log('submit')
  
      axios.post('http://localhost:7001/api/comment/post' , {
        hobbyQName: params.hobbyQName,  
        title: params.title,
        comment: document.getElementById('comment').value,
        username: params.username
      })
        
        
    }
  
    async function fetchCommentData() {
      const response = await axios.get(`http://localhost:7001/api/comment/select/?title=${params.title}&hobbyQName=${params.hobbyQName}`, )
      
      const data = await Array.from(response.data);
      console.log(data)
      return data;
    }
    const [commentData, setCommentData] = useState([])
    useEffect(() => {
      fetchCommentData().then(data =>setCommentData(data))
    }, [])
    

    
    return (
      <div>
        <h2>标题：{params.title}</h2>
        <h2>发帖内容：</h2>
        <div>
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
        <div>
  
          <label htmlFor='comment'>评论：</label>
          <input type="text" id="comment" name="comment" required />
          <br />  
          <button onClick={()=>handleSubmit()}>评论</button>
          
        </div>
        <div>
          <h2>评论：</h2>
          {
            commentData.map(item => (
              <div key={item.comment}>
              
              
  
                评论者：{item.username}   评论内容：{item.comment}
                
  
              </div>
          ))
        }
        </div>
        
      </div>
    )
  
  
  }

  export default Note;