import React, {useState} from 'react'
import { render } from 'react-dom'
import  {Redirect} from 'react-router-dom'

function Login(props) {
    const [redict,setRedict]=useState(false)
    const log = () =>{
        auth.uAuth(() =>
           setRedict(true)
        )
    }
    const { from } = props.location.state || { from: { pathname: "/" } };
    if (redict) {
        return <Redirect to={from} />;
      }       
    return (
        <div>
             <p>You must log in to view the page {from.pathname}</p>
        <button onClick={log}>Log in</button>
        </div>
    )
}

export default Login
export const auth = {
    userAuth :false ,
    uAuth(cb) {
        this.userAuth = true
    setTimeout(cb,100)
    }

}