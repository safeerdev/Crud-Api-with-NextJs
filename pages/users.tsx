import axios from 'axios'
import React from 'react'
import UsersList  from "../components/UsersList"
import usersStyles from "../styles/users.module.css"


const users = ({users}:any) => {

  return (
    // <div>{users.map(user=><h1>{user.firstName}</h1>)}</div>
    <>
    <div className={usersStyles.userList}>
        <h3 className={usersStyles.field}>First Name</h3>
        <h3 className={usersStyles.field}>Last Name</h3>
        <h3 className={usersStyles.field}>Age</h3>
        <h3 className={usersStyles.field}>Edit</h3>
    </div >
    {users.map((user:[])=> <UsersList users={user}/>)}
       
    </>
  )
}

export default users


export const getStaticProps=async()=>{

        
        const res = await axios.get("http://localhost:5000/user")
        // console.log("resss",res);
        const users=await res.data
        return {
         props:{
          users
         }
  
  }
}