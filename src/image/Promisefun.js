import React from 'react'

function Promisefun() {
//asyncronous javascript
//promises
//3 stages:pending,fulfilled,rejected


const myPromise = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
      resolve("Yes! Resolved the promise.");
    } else {
      reject("No! Rejected the promise.");
    }
  });




  //2
  const Nextpromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("Yes! Resolved the NEXT promise")
    },3000)
  })

  //first nextpromise tha call pannom aana mypromise firt run aaki after 3mins aprm nextpromise run aakuthu
  //ithu sync javascript yyarukum wait panna run aakuthu

  Nextpromise
  .then((result) => {
    console.log(result); // Log the resolved value
  })
  .catch((error) => {
    console.error(error); // Log the rejected reason
  });

  
  myPromise
  .then((result) => {
    console.log(result); // Log the resolved value
  })
  .catch((error) => {
    console.error(error); // Log the rejected reason
  });


  //api Example
//intha promise um callback func read panna hard function kulla fuction ah pogum 
//athe aprm intha promise vanthuchi ithum then then nu potukite pona 
//read ability illa so 2018 la es6 ala async and await vanthuchu
  const user=fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).
  then(res=>res.forEach(user=>console.log(user)))

  console.log(user)
  

  


  return (
    <div>Promise</div>
  )
}

export default Promisefun