import React from 'react'
type ChildProps = {
  children: string
}

export const CustomTyper = (props : ChildProps) => {
  return (
    <>
      <h2>{props.children}</h2>
      <p><i>above text came from parent : app.tsx</i></p>
    </>
  )
}
