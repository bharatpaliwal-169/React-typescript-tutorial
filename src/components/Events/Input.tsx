import React from "react"

type Inputprops = {
  value : string,
  handleChange : (event : React.ChangeEvent<HTMLInputElement>)=>void
}

export const Input = (props : Inputprops) => {
  return (
    <div>
      <h6>This is input event</h6>
      <input type="text" name="name" id="name" value ={props.value} onChange={props.handleChange} />
    </div>
  )
}
