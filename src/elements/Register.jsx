import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'

// 注册界面
const Register = () => {
  function handleSubmit() {
    console.log('submit')
    axios.post('http://localhost:22209/api/user/register' , {username: document.getElementById('username').value, password: document.getElementById('password').value})
      .then((response) => {
        if (response.data === true) {
          console.log("注册成功")
          window.location.href = "/hobbyQ-frontend/login"
        } else {
          console.log("注册失败")
          window.location.href = "/hobbyQ-frontend/register/fail"
        }
      })
  }
  return (
    <div id='page' className="w-full bg-slate-400 rounded-2xl">
      <div className="container">
        <div className="login">
          <div className="hero">
            <h1>Register to <br /> Begin Your Trip</h1>
            <p>If you have an account, <br /> you can <a href="/hobbyQ-frontend/login">log in here</a>. </p>
          </div>
          <div className="main content-center bg-fuchsia-50">

            <div className="bg-slate-400 rounded-xl p-5">
              <p>
                <input type="text" id="username" name="username" placeholder='Username' className='w-48 rounded-sm' required />
              </p>
              <br />
              <p className="password">
                <input type="password" id="password" name="password" placeholder='Password' className='w-48 rounded-sm' required />
                <i className="ri-eye-off-line"></i>
              </p>
              <br />
              <p>
                <button onClick={()=>handleSubmit()}>注册</button>
              </p>
            </div>
            
            
          </div>
        </div>
      </div>
      <div className='px-56 py-2 text-center bg-slate-400 rounded-3xl'>
        contact us: 221900209@smail.nju.edu.cn
      </div>
    </div>
  );
}
  
  export default Register;