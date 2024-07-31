import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'

// 注册失败界面
const RegisterFail = () => {
    return (
      <div className="bg-sky-300 rounded-2xl p-4">
        <h1>用户名已存在，注册失败！</h1>
        <br />
        <button onClick={()=>window.location.href='/register'}>重新注册</button>
      </div>
    )
  }
  
  export default RegisterFail