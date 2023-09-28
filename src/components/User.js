import { useEffect, useState } from "react"
import axios  from "axios";
import { Link } from "react-router-dom";

export default function User() {
    const [allUsers,setAllUsers] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(result =>{
setAllUsers(result.data)
        })
        .catch(err =>{
            console.log(err)
        })

    }
    // when its gona start on the change if empty its lopping
    ,[])
  return (
    <div>
        {
            allUsers && allUsers.map( user=>{
                return(
                    <div key={user.id}>
                        <Link to={`/user/{user.id}`}> {user.name} </Link>
                    </div>
                )
            })
        }
      N users
    </div>
  )
}
