import axios from 'axios';
import { useRouter } from 'next/router';
import React,{useState} from 'react'
import styles from '../styles/Home.module.css'


const update = () => {
    const router=useRouter()
    type user={
        id?:number 
        firstName?:string  ;
        lastName?:string  ;
        age?:number 
    }
 //debugger
    const users:user = router.query;
    console.log("in update page",users)
      const [firstName,setFirstName] =useState<string|undefined>(users.firstName)
      const [lastName,setLastName] =useState<string|undefined>(users.lastName)
      const [age,setAge] =useState<number|undefined>(users.age)
      const [save,setSave]=useState(false)
      
  const saveUser=async()=>{
   try {
      if(firstName !== "" && lastName!== "" && age !==null){
        const res =await axios.patch(`http://localhost:5000/user/${users.id}`,{firstName,lastName,age}) 
        if(res.status==200){
          setSave(true)
          setTimeout(()=>{
            setSave(false)
          },1000)
       }
       console.log("res.data",res.data)
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={styles.container}>
  <h1>Update User</h1>
   <div className={styles.formContainer}>
    <input className={styles.input} name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='Enter Your Firstname'/>
    <input className={styles.input} value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Enter Your Lastname'/>
    <input className={styles.input} value={age} inputMode={'numeric'} onChange={(e)=>setAge(+e.target.value)} placeholder='Enter Your Age'/>
    
    <button onClick={saveUser}  className={styles.btn}>Upload</button>
    {
      save ? <p className={styles.save}>User Updated</p> :null
    }
   </div>
  </div>
  )
}

export default update