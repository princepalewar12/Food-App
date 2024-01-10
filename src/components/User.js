import React, { useEffect, useState } from 'react'

const User = ({name}) => {
    const[count, setCount] = useState(0)
    const[count1, setCount1] = useState(1)

    useEffect(()=>{
        
    },[])
  return (
    <div className='user-card'>
        <h1>Count ={count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Nagpur</h3>
        <h4>Contact: @princepalewar</h4>
    </div>
  )
}

export default User