import React, { useState } from 'react'

const Students = () => {
    const [name,setName]=useState("")
    const [gender,setGender]=useState("")
    const [age,setAge]=useState("")
    const [skill,setSkill]=useState("")

    const handleSubmit=()=>{
        const obj={
            name,gender,age,skill
        }
        
        console.log("obj:",obj)
        alert("Thanks for submitting your info")
        setName("")
        setGender("")
        setAge("")
        setSkill("")
    }
  return (
    <div style={{display:"flex",flexDirection:"column", width:"50%",margin:"auto"}}>
      Name:<input placeholder='Your name' value={name} onChange={(e)=>setName(e.target.value)}/>
      Gender:<input placeholder='Your gender' value={gender} onChange={(e)=>setGender(e.target.value)}/>
      DOB:<input placeholder='Your age' value={age} onChange={(e)=>setAge(e.target.value)}/>
      Skills:<input placeholder='Your Skill' value={skill} onChange={(e)=>setSkill(e.target.value)}/>

      <div>
      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Students
