import { useEffect, useState } from 'react'

import { BrowserRouter, Route, Routes, useParams } from'react-router-dom'
import axios from 'axios'



// 登录界面
const Login = () => {

    function handleSubmit() {
      const username = document.getElementById('username').value
      console.log('submit')
  
      axios.post('http://localhost:7001/api/user/login' , {username: document.getElementById('username').value, password: document.getElementById('password').value})
        .then((response) => {
          if (response.data === true) {
            console.log("注册成功")
            console.log(username)
            console.log(`/${username}/hobbyQ`)
            window.location.href = `/${username}/hobbyQ`
          } else {
            console.log("注册失败")
            window.location.href = "/login/fail"
          }
        })
    }


    return (
      <div id='page' className="w-full bg-slate-400 rounded-2xl">
        <div className="container">
          <div className="login">
            <div className="hero">
              <h1>Sign In to <br /> Open the HobbyQ</h1>
              <p>If you don't have an account, <br /> you can <a href="/register">register here</a>. </p>
            </div>
            <div className="main content-center">
              <p>
                <input type="text" id="username" name="username" placeholder='Username' required />
              </p>
              <br />
              <p className="password">
                <input type="password" id="password" name="password" placeholder='Password' required />
                <i className="ri-eye-off-line"></i>
              </p>
              <br />
              <p>
                <button onClick={()=>handleSubmit()}>登录</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
    
  }
  
  export default Login;