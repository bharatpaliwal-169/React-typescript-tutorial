import React from 'react'
type HelloProps = {
  name: string,
  age : number,
  gender ?: 'Male' | 'Female' //its optional prop
}
const Hello = (props: HelloProps) => {
  return (
    <>
      Hi {props.name}! 
      <p>Is your age {props.age} ?</p>
      <button>yes</button>
      <h5>you are a : {props.gender}</h5>
    </>
  )
}

export default Hello;