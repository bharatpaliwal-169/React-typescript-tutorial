import {useState} from 'react'

type AuthUser = {
  name : string,
  email : string,
}
type dummyUser = {
  name : string,
  email : string,
}
export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [test,setTest] = useState<dummyUser>({} as dummyUser);

  const logout = () => {
    setUser(null);
    setTest({} as dummyUser);
  }
  const login = () => {
    setUser({
      name: 'John Doe',
      email: 'Joe@something.com'
    })

    setTest({
      name: 'John Doe',
      email: 'sdfsd'
    })
  }
  return (
    <>
      <div>User</div>
      <button onClick={login}>Login</button>
      <div>{user?.email} : {user?.name}</div>
      <p> {test.email} : {test.name} </p>
      <button onClick={logout} >Logout</button>
    </>
  )
}
