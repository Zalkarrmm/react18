import React, { useState } from 'react'

const BatchingExample = () => {
  const [value, setValue] = useState(0)
  const [state, setState] = useState(0)
  
  console.log('render');

  const update = () =>{
    setValue(prev => prev + 1)
    setState(prev => prev + 1)
  }
  return (
    <div>
      <h1>value: {value}</h1>
      <h1>state: {state}</h1>
      <button onClick={update} >UPDATE</button>
    </div>
  )
}

export default BatchingExample