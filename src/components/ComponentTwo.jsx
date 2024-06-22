import React from 'react'
import { useDispatch } from 'react-redux'
import { increase } from '../slice/counter.slice'
import ComponentThree from './ComponentThree'

const ComponentTwo = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
        dispatch(increase())
  }
  return (
    <div>ComponentTwo
      <button className=' px-2 bg-gray-300 rounded' onClick={handleClick}>increase</button>
      <ComponentThree/>
    </div>
  )
}

export default ComponentTwo