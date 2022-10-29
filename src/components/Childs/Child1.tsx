import React from 'react'
type NewProps = {
  children : React.ReactNode
}
export const Child1 = (props : NewProps) => {
  return (
    <>
      {props.children}
    </>
  )
}
