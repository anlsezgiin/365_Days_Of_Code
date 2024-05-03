import React from "react";
import Input from "./Input";

function Login()
{
    return(
        <form action="form">
            <Input type="text" placeholder="Username"/>
            <Input type ="password" placeholder="Password"/>
            <button type="Submit">Login</button>
        </form>
    )
}

export default Login;