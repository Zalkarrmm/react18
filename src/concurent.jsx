import React, {  useDeferredValue, useId, useMemo, useState, useTransition } from 'react'
import data from './dataitems.json'
const Concurent = () => {
  const [value, setValue] = useState('')
  const [items, setItems] = useState(data)
  // const [filteredValue, setFilteredValue] = useState('')
  console.log(items);
  // const [isPending, startStansition] = useTransition()
  const defferedValue = useDeferredValue(value)
  
  // const filteredItems = useMemo(() => {
  //   return items.filter(item => item.name.toLocaleLowerCase().includes(value))
  // }, [filteredValue])

  const filteredItems = useMemo(() => {
    return items.filter(item => item.name.toLocaleLowerCase().includes(defferedValue))
  }, [defferedValue])



  const onChangeValue = (e) => {
    setValue(e.target.value)
    
    //  startStansition(() => {
    //    setFilteredValue(e.target.value)
    //  })
    
  }
  return (
    <div>
      <input value={value} onChange={onChangeValue} type="text"  />
      <div>
        {/* {isPending && <h1>loading...</h1> } */}
        {filteredItems.map((item, i) => {
          return (
            <p key={i}>{item.name}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Concurent