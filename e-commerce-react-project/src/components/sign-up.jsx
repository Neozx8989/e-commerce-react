import { useState } from "react";

export default function SignUpFunc(props) {
    const [users , setUsers] = useState([]);
    function handleRegister(event) {
        event.preventDefault();
        console.log(event.target.firstname.value)
        console.log(event.target.lastname.value)
        console.log(users)
      
        const user = {
          firstname: event.target.firstname.value,
          lastname: event.target.email.value,
          password: event.target.password.value,
        }
      
      
        setUsers([...users, user])
      }
      

  return (
    <div className="SignUpContainer">
        <h1>{props.name}</h1>
      <form onSubmit={handleRegister}>
       <p>Name*</p>
       <input type="text" name="firstname" placeholder={props.firstname}></input>
       
       <p>Email*</p>
       <input type="email" name="email" placeholder={props.email}></input>
       
       <p>Password*</p>
       <input type="password" name="password" placeholder={props.password}></input>
       <p className="pass-title">{props.passtitle}</p>
        <div>
            <button>{props.button}</button>
        </div>
        <div className="have-acc">
        <p>{props.ask}</p><a href="#">{props.login}</a>
        </div>
      </form>
    </div>
  );
}
