//
// Home.jsx 主要负责欢迎页面。
//



// 初始界面，含有登录、注册按钮
const Home = () => {
    return (
      <div className="bg-sky-200 justify-center items-center rounded-2xl p-6">
        <br />
        <h1 >Welcome to HobbyQ!</h1>
        <h1>欢迎来到兴趣圈！</h1>
        <br />
        <div className="flex flex-row justify-evenly  px-6 py-8 rounded-2xl">
          <div className="flex justify-content-center bg-blue-500 p-2 rounded-2xl shadow-2xl">
            <a href="/hobbyQ-frontend/#/login" className="text-white font-bold text-2xl">登录</a>
          </div>
          <div className="flex justify-content-center bg-blue-500 p-2 rounded-2xl shadow-2xl">
            <a href="/hobbyQ-frontend/#/register" className="text-white font-bold text-2xl">注册</a>
          </div>
        </div>
      
        <div className='px-26 py-0 text-center rounded-3xl'>
          contact me : 221900209@smail.nju.edu.cn
        </div>
      </div>
      
    );
  }

export default Home;

