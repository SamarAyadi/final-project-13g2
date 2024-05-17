import React, { useState } from 'react'
import Style from './Counter.module.css'
function Counter() {


    const [count, setCount] = useState(0)

    

    const increment =  () => {
        setCount((prev) => {
          console.log(prev)
          return count + 1
        }
        ) 
        
    }
    
  return (
    <>
      <h2>My Counter</h2>
      <h4>{count}</h4>

      <button onClick={increment} className='btn btn-success'>+</button>
    </>
  )
}

export default Counter
