import {useState} from 'react'


export const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleIsLogin = () => {
    setIsLogin(true)
  }
  const handleIsLogout = () => {
    setIsLogin(false)
  }

  return (
    <>
      <h3>UseState Hook</h3>
      <button onClick={handleIsLogin} >Login</button>
      <button onClick={handleIsLogout}>Logout</button>
      <div>
        <p>
          <i>
            User is {isLogin ? 'logged in' : 'not logged in'}
          </i>
        </p>
      </div>
    </>
  )
}
