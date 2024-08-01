import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'


// 登录失败界面
const LoginFail = () => {
    return (
      <div className="bg-sky-300 rounded-2xl p-4">
        <h1>用户名或密码错误，<br />请重新登录！</h1>
        <br />
        <button className='bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded text-3xl' onClick={()=>window.location.href='/hobbyQ-frontend/#/login'}>重新登录</button>
      </div>
    )
  }

  export default LoginFail;