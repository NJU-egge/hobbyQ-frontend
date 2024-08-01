import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'

// 注册失败界面
const RegisterFail = () => {
    return (
      <div className="bg-sky-200 rounded-2xl p-4">
        <h1>用户名已存在，<br />请重新注册失败！</h1>
        <br />
        <button className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded text-3xl' onClick={()=>window.location.href='/hobbyQ-frontend/#/register'}>重新注册</button>
      </div>
    )
  }
  
  export default RegisterFail