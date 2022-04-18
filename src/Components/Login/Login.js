import React from 'react';
import { useState, useContext } from 'react/cjs/react.development';
import {FirebaseContext} from '../../store/Context'
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  
  const history = useHistory();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const {firebase} = useContext(FirebaseContext);

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(email,password);
   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      alert('user login')
      history.push('/')
   }).catch((err)=>{
     alert(err.message+'login fales')
   })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={((e)=>{setEmail(e.target.value)})}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            value={password}
            onChange={((e)=>{setPassword(e.target.value)})}
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
