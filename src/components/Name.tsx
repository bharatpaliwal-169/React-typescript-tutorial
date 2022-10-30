import { NameProps } from "./Types/Name.type"
const Name = (props : NameProps) => {
  return (
    <div>
      <p>First Name: {props.name.first}</p>
      <p>Last Name: {props.name.last}</p>
    </div>
  )
}

export default Name