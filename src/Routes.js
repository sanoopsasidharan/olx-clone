import React,{useEffect,useContext} from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Routers, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {AuthContext, FirebaseContext} from './store/Context'
import Post from "./store/PostContext";


function Routes() {
  const {setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
     firebase.auth().onAuthStateChanged((user)=>{
       setUser(user)
     })

  })
  return (
    <>
    <Post>
      <Routers>
        <Route exact path={"/"}>
          <Home />
        </Route>
        <Route path={'/signup'}>
            <Signup />
        </Route>
        <Route path={'/login'}>
            <Login />
        </Route>
        <Route path={'/create'}>
            <Create />
        </Route>
        <Route path={'/view'}>
            <View />
        </Route>
      </Routers>
    </Post>
    </>
  );
}

export default Routes;
