import React from 'react'
import usersStyles from "../styles/users.module.css";
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
const UsersList = ({users,setId}:any) => {
    const router=useRouter()
    const saveUser=async(id:number)=>{
        try {           
            console.log(id)
            const res =await axios.delete(`http://localhost:5000/user/${id}`) 
            if(res?.status==200){
                router.reload()
            }
          }
          catch (error) {
          console.log("error",error);
        }
      }
  return (
    <div className={usersStyles.userList}>
    <h3 className={usersStyles.fieldValue}>{users.firstName}</h3>
    <h3 className={usersStyles.fieldValue}>{users.lastName}</h3>
    <h3 className={usersStyles.fieldValue}>{users.age}</h3>
    <div className={usersStyles.fieldValue}>
        <Link href={{ pathname: '/update', query: users }} >
        <img src='edit.png' className={usersStyles.img}/>
        </Link>
        <img src='del.png' onClick={()=>saveUser(users.id)} className={usersStyles.img}/>
    </div>
        
    </div>
  )
}

export default UsersList