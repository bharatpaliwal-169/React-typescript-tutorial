import { useEffect, useRef } from "react"

const UseRefHookEg = () => {

  const inputRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    inputRef.current?.focus();
    
  }, [])
  

  const handleClick = () => {
    console.log(usernameRef.current?.value);
    console.log(inputRef);
    
    
  }
  return (
    <>
    
      <div>
        <input ref={inputRef} type="text" name="focus" placeholder='focus auto' />
        <input ref={usernameRef} type="text" name="username" placeholder='username' />
        <button type="submit" onClick={handleClick}>Click</button>
      </div>

    </>
  )
}

export default UseRefHookEg