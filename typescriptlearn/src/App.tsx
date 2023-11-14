import IEmployee from "./Interfaces/IEmployee";

const Emp : IEmployee = {
  username: "",
  accessType: "Employee",
  age: 12,
  userAccessId: 23456787
}
const App = () => {
  return (
    <>App
      {Emp}
    </>
  )
}

export default App;