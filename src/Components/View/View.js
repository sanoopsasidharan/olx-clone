import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const [userDetails,setUserDetails] = useState('');
  const {postDetails} = useContext(PostContext);
  const {firebase} = useContext(FirebaseContext);

  useEffect(()=>{
    const {userId} = postDetails
    console.log(userId);
      firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
        res.forEach(doc => {
          console.log(doc.data());
           setUserDetails(doc.data())
           console.log(userDetails+'dkajkjldkjlfaj');
        })
      })
  })
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>user</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
