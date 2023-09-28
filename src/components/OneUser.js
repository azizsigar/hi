import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams} from "react-router-dom";
// import Post from './Post';

export default function OneUser() {
    let{userId} = useParams();
    const [userInfo,setUserInfo]=useState({})
    const [userPosts,setUserPosts]=useState([])


    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/user/${userId}`)
        .then(result => {
            setUserInfo(result.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[userId])
        axios.get(`https://jsonplaceholder.typicode.com/posts?usersId=${userId}`)
        .then(result => {
            setUserPosts(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    
  return (
    <div>
      <h1>USER INFO: {userInfo.name}</h1>
      <p>POSTS:
        {
            userPosts && userPosts.map(post =>{
                return(
                    <div key={post.id}>
                        <hr></hr>
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <br></br>
                        <hr></hr>
                    </div>
                )
            })
        }
      </p>
    </div>
  )
}
