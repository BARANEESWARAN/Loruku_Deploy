import React from 'react';

import logo from "./image/gti-logo.png"
function Callback() {
//call back currently callback not used A callback is a function that is passed inside another function, and then called in that function to perform a task.
console.log('fired first');
console.log('fired second');

setTimeout(()=>{
    console.log('fired third');
},2000);

console.log('fired last');








  return (
   <div>
callback
   </div>

   

    
  )
}

export default Callback
