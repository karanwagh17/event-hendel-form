import React, { useState } from 'react'
import '../App.css'


const Form= () => {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [city,setcity]=useState('')
  const [gender,setgender]=useState('')


const handleClick =(e)=>{
  e.preventDefault();
  const obj={
    name:name,
    email:email,
    password:password,
    city:city,
    gender:gender
  }
  localStorage.setItem('employee',JSON.stringify(obj))
  console.log(obj);
  setname('');
  setemail('');
  setpassword('');
  setcity('');
  setgender('');


}






  return (
    <>
   
    <form action="" onSubmit={handleClick}>
    <h1>
      Form
    </h1>
      <input type="text" placeholder='enter your name ' value={name} onChange={(e)=>setname(e.target.value)}/><br />
      <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/><br />
      <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br />
      <select name="" id=""  onChange={(e)=>setcity(e.target.value)}>
        <option value="">city</option>
        <option value="delhi">delhi</option>
        <option value="surat">surat</option>
        <option value="mumbai">mumbai</option>
      </select><br />
      male <input type="radio" value={"male"} name="gender" className='first'  onChange={(e)=>{setgender(e.target.value)}}/>
      female <input type="radio" value={"female"} name="gender" className='first'  onChange={(e)=>{setgender(e.target.value)}} /> <br />
 

      <input type="submit" value="submit"/>


    </form>



    </>




  )



}

export default Form
