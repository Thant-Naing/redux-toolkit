import React from 'react'
import { useDispatch } from 'react-redux'
import { decrease, increasePayLoad } from '../slice/counter.slice'

const ComponentThree = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(decrease())
}

const increasePayload = () => {
   dispatch(increasePayLoad(6))
}
  return (
    <div>ComponentThree
      <button className=' px-2 bg-gray-300 rounded' onClick={handleClick}>decrease</button><br/>

      <button className=' px-2 bg-gray-300 rounded' onClick={increasePayload}>increase payload</button>
    </div>
  )
}

export default ComponentThree