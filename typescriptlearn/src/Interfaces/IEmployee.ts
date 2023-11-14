import IUser from "./IUser";

interface IEmployee extends IUser{
  accessType : "Client" | "Employee" | "Admin",
  userAccessId : number
}

export default IEmployee