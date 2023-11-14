// // import IEmployee from "./Interfaces/IEmployee";

// import { useContext } from "react";
// import { ThemeContext } from "./contexts/ThemeProvider";

// // const Emp : IEmployee = {
// //   username: "John Smith",
// //   accessType: "Employee",
// //   age: 12,
// //   userAccessId: 23456787
// // }
// const App = () => {
//   // return (
//   //   <>
//   //     <h1>
//   //       Hi {Emp.username}
//   //     </h1>
//   //   </>
//   // )

//   const {state,dispatch} = useContext(ThemeContext);
//   console.log(state);
//   return (
//     <>
    
//     <button onClick={() => dispatch({type: "CHANGE_THEME"})}>Change Theme</button>
//     <button onClick={() => dispatch({type: "CHANGE_FONTSIZE",payload:20})}>Change FontSize</button>

//     </>
//   )
  
// }

// export default App;


import UsrRefHookEg from './components/UseRefHookEg'
const App = () => {
  return (
    <UsrRefHookEg/>
  )
}

export default App