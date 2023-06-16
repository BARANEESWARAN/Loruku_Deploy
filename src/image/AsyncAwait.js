import React from 'react'

function AsyncAwait() {
    const myuserObj={
        user:[]
    }
    const myuserObjtwo={
        user:[]
    }
const Demo=async()=>{
  
const res=await fetch("https://jsonplaceholder.typicode.com/users")
const user=await res.json()
return user
}


const AnotherDemo=async()=>{
    const data=await Demo()
    myuserObj.user=data
    console.log(myuserObj,"first")
    return data
  
    }
//inga namma kela anotherDemo ku await podala athanala empty tha myuservarum because athu global state namma antha fuc kull poda data varum
    AnotherDemo()
    console.log(myuserObj,"second")

//2

const Demotwo=async()=>{
  
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    const user=await res.json()
    AnotherDemotwo(user)
    return user
    }
    
    
    const AnotherDemotwo=(data)=>{
        
        myuserObjtwo.user=data
        console.log(myuserObjtwo,"first2")
        return data
      
        }
Demotwo()
        console.log(myuserObjtwo,"last")

  return (
    <div>AsyncAwait</div>
  )
}

export default AsyncAwait