import { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"

export default function SignUpFunc(props) {
  return (
    <div className="SignUpContainer">
        <h1>{props.name}</h1>
      <form>
       <p>Name*</p>
       <input type="text" name="firstname" placeholder={props.firstname}></input>
       
       <p>Email*</p>
       <input type="email" name="email" placeholder={props.email}></input>
       
       <p>Password*</p>
       <input type="password" name="password" placeholder={props.password}></input>
       <p className="pass-title">{props.passtitle}</p>
        <div>
            <Link to={"/createaccount"}><button className="creat-button">{props.button}</button></Link>
        </div>
        <div className="have-acc">
        <p>{props.ask}</p><Link to={"/home"}>{props.login}</Link>
        </div>
      </form>
    </div>
  );
}
